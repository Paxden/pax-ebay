import React, { useEffect, useState } from "react";
import axios from "axios";

// Libraries
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  faBarsStaggered,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [expandedOrderId, setExpandedOrderId] = useState(null);
  const [platform, setPlatform] = useState("");
  const [status, setStatus] = useState("");

  const token = localStorage.getItem("token");

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "https://api.ebaydropshipping.com/v1/orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            platform: platform || undefined,
            status: status || undefined,
          },
        }
      );
      setOrders(res.data.data.orders || []);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [platform, status]);

  const handleExpand = (orderId) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };

  const formatStatusBadge = (status) => {
    const map = {
      shipped: "success",
      delivered: "success",
      processing: "warning",
      pending: "warning",
      cancelled: "danger",
    };
    return `text-bg-${map[status] || "secondary"}`;
  };

  return (
    <div className="products orders">
      {/* Filters */}
      <div className="filter d-flex mb-3 align-items-center gap-5">
        <div className="add-filter d-flex gap-2 align-items-center btn">
          <FontAwesomeIcon icon={faBarsStaggered} />
          <p>Add Filter</p>
        </div>

        <Form.Group controlId="platformSelect">
          <Form.Select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="">All Platforms</option>
            <option value="ebay">eBay</option>
            <option value="amazon">Amazon</option>
            <option value="aliexpress">AliExpress</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="statusSelect">
          <Form.Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Filter by status</option>
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="cancelled">Cancelled</option>
          </Form.Select>
        </Form.Group>
      </div>

      {/* Bulk Actions */}
      <div className="bulk-action d-flex align-items-center gap-3">
        <div className="btn btn-sm">Bulk Edit</div>
        <div className="btn btn-sm">Bulk Relist</div>
        <div className="btn btn-sm">Bulk Delete</div>
      </div>

      {/* Orders Table */}
      <div className="products-monitor mt-3">
        <div className="details revised-listing-table border border-3">
          <table className="monitor table-striped text-truncate border table">
            <thead>
              <tr>
                <th>
                  <Form.Check disabled />
                </th>
                <th>Name</th>
                <th className="text-center">Date</th>
                <th className="text-center">Order Status</th>
                <th className="text-center">Tracking</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <React.Fragment key={order.id}>
                  <tr>
                    <td>
                      <Form.Check />
                    </td>
                    <td>
                      <div className="d-flex gap-3 align-items-center">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Product"
                          width="40"
                          height="40"
                          className="rounded"
                        />
                        <div>
                          <h6 className="mb-0">{order.order_id}</h6>
                          <small>{order.buyer_username}</small>
                        </div>
                      </div>
                    </td>
                    <td className="text-center">
                      {order.created_at?.split("T")[0] || "—"}
                    </td>
                    <td className="text-center">
                      <div className={formatStatusBadge(order.status)}>
                        {order.status}
                      </div>
                    </td>
                    <td className="text-center">
                      {order.tracking_number || "—"}
                    </td>
                    <td
                      className="text-center"
                      onClick={() => handleExpand(order.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon icon={faEllipsisVertical} />
                    </td>
                  </tr>

                  {/* Variations */}
                  {expandedOrderId === order.id && (
                    <tr>
                      <td></td>
                      <td colSpan={5} className="p-0">
                        <table className="table table-bordered table-striped text-center">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>SKU</th>
                              <th>QTY</th>
                              <th>Item ID</th>
                              <th>Price</th>
                              <th>Profit</th>
                              <th>Fee/Tax</th>
                              <th>Store</th>
                              <th>Tags</th>
                            </tr>
                          </thead>
                          <tbody>
                            {(order.items || []).map((item, idx) => (
                              <tr key={item.id}>
                                <td>{idx + 1}</td>
                                <td>{item.sku}</td>
                                <td>{item.quantity}</td>
                                <td>{item.platform_item_id}</td>
                                <td>
                                  {item.price} {order.currency}
                                </td>
                                <td>{item.profit || "—"}</td>
                                <td>{item.fee || "—"}</td>
                                <td>{item.platform || "—"}</td>
                                <td>
                                  <span className="badge bg-secondary">
                                    {item.tag || "None"}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;
