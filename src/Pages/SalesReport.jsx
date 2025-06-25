import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faEdit,
  faTrashArrowUp,
  faFontAwesome,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";

function SalesReport() {
  const token = localStorage.getItem("token"); // Logged-in token
  const [platform, setPlatform] = useState("");
  const [period, setPeriod] = useState("this_month");
  const [status, setStatus] = useState("");
  const [overview, setOverview] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [selected, setSelected] = useState(new Set());
  const [loading, setLoading] = useState(false);

  // Fetch sales overview
  useEffect(() => {
    const fetchOverview = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/sales/overview", {
          baseURL: "https://api.ebaydropshipping.com/v1",
          headers: { Authorization: `Bearer ${token}` },
          params: { period, platforms: platform || undefined },
        });
        setOverview(res.data.data);
      } catch (e) {
        console.error("Overview fetch error:", e);
        setOverview(null);
      } finally {
        setLoading(false);
      }
    };
    fetchOverview();
  }, [platform, period]);

  // Fetch sales transactions
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await axios.get("/sales/transactions", {
          baseURL: "https://api.ebaydropshipping.com/v1",
          headers: { Authorization: `Bearer ${token}` },
          params: {
            platform: platform || undefined,
            period,
            status: status || undefined,
          },
        });
        setTransactions(res.data.data.transactions || []);
      } catch (e) {
        console.error("Transactions fetch error:", e);
        setTransactions([]);
      }
    };
    fetchTransactions();
  }, [platform, period, status]);

  const toggleSelect = (id) => {
    const s = new Set(selected);
    s.has(id) ? s.delete(id) : s.add(id);
    setSelected(s);
  };

  const isAllSelected =
    transactions.length && transactions.every((t) => selected.has(t.id));
  const toggleSelectAll = () => {
    if (isAllSelected) setSelected(new Set());
    else setSelected(new Set(transactions.map((t) => t.id)));
  };

  const handleDownload = () => {
    // call POST /sales/reports/export
    console.log("Download invoked");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="sales-report p-4">
      <div className="head d-flex justify-content-between align-items-start flex-wrap mb-3">
        <div className="buttons btn-group mb-2">
          <Button variant="secondary">Sales Report</Button>
          <Button variant="outline-secondary">Error Log</Button>
          <Button variant="outline-secondary">Balance Sheet</Button>
        </div>
        <div className="download btn-group mb-2">
          <Button size="sm" variant="warning">
            Manual Control
          </Button>
          <Button size="sm" variant="info">
            Update Control
          </Button>
          <Button size="sm" variant="secondary">
            Customize
          </Button>
          <Button size="sm" variant="success" onClick={handleDownload}>
            Download
          </Button>
        </div>
      </div>

      <div className="filters d-flex align-items-center gap-3 mb-3">
        <Form.Select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="">Platform</option>
          <option value="ebay">eBay</option>
          <option value="amazon">Amazon</option>
          <option value="tiktok">TikTok</option>
        </Form.Select>
        <Form.Select value={period} onChange={(e) => setPeriod(e.target.value)}>
          <option value="today">Today</option>
          <option value="this_week">This Week</option>
          <option value="this_month">This Month</option>
          <option value="last_month">Last Month</option>
        </Form.Select>
        <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="error">Error</option>
        </Form.Select>
        <Button variant="primary">Archive</Button>
      </div>

      <div className="bulk-actions mb-3">
        <Button size="sm" variant="outline-secondary" disabled={!selected.size}>
          <FontAwesomeIcon icon={faEdit} /> Edit
        </Button>{" "}
        <Button size="sm" variant="outline-secondary" disabled={!selected.size}>
          <FontAwesomeIcon icon={faTrashArrowUp} /> Remove
        </Button>{" "}
        <Button size="sm" variant="outline-secondary" disabled={!selected.size}>
          <FontAwesomeIcon icon={faFontAwesome} /> Flag
        </Button>{" "}
        <Button size="sm" variant="outline-secondary" disabled={!selected.size}>
          <FontAwesomeIcon icon={faArchive} /> Archive
        </Button>{" "}
        <Button size="sm" variant="outline-secondary" disabled={!selected.size}>
          <FontAwesomeIcon icon={faInbox} /> Override
        </Button>
      </div>

      {/* Summary */}
      {overview && (
        <div className="mb-4">
          <h5>
            Summary ({overview.period.start_date} to {overview.period.end_date})
          </h5>
          <div className="d-flex flex-wrap gap-3">
            {Object.entries(overview.summary).map(([k, v]) => (
              <div key={k} className="p-2 border rounded bg-light">
                <strong>{k.replace(/_/g, " ")}</strong>:{" "}
                {typeof v === "number" ? v.toFixed(2) : v}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Transactions Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>
              <Form.Check checked={isAllSelected} onChange={toggleSelectAll} />
            </th>
            <th>Order ID</th>
            <th>Date</th>
            <th>Platform</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr key={t.id}>
              <td>
                <Form.Check
                  checked={selected.has(t.id)}
                  onChange={() => toggleSelect(t.id)}
                />
              </td>
              <td>{t.order_id}</td>
              <td>{new Date(t.transaction_date).toLocaleDateString()}</td>
              <td>{t.platform}</td>
              <td>${t.amount.toFixed(2)}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default SalesReport;
