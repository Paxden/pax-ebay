import React, { useEffect, useState } from "react";
import { Form, Table, Spinner, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    platform: "",
    supplier: "",
    status: "",
    price_change: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockOverview = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("access_token");

        const res = await axios.get("https://api.ebaydropshipping.com/v1/stock/overview", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            ...filters,
            per_page: 50,
            page: 1,
          },
        });

        setProducts(res.data.data.items || []);
      } catch (error) {
        console.error("Error loading stock overview", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStockOverview();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="products">
      <div className="mb-4">
        <Row className="g-3">
          <Col md={3}>
            <Form.Select name="platform" onChange={handleFilterChange} value={filters.platform}>
              <option value="">All Platforms</option>
              <option value="ebay">eBay</option>
              <option value="amazon">Amazon</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select name="supplier" onChange={handleFilterChange} value={filters.supplier}>
              <option value="">All Suppliers</option>
              <option value="aliexpress">AliExpress</option>
              <option value="cjdropshipping">CJ Dropshipping</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select name="status" onChange={handleFilterChange} value={filters.status}>
              <option value="">All Stock Status</option>
              <option value="in_stock">In Stock</option>
              <option value="low_stock">Low Stock</option>
              <option value="out_of_stock">Out of Stock</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Select name="price_change" onChange={handleFilterChange} value={filters.price_change}>
              <option value="">All Price Status</option>
              <option value="increased">Increased</option>
              <option value="decreased">Decreased</option>
              <option value="unchanged">Unchanged</option>
            </Form.Select>
          </Col>
        </Row>
      </div>

      {loading ? (
        <div className="text-center p-5">
          <Spinner animation="border" />
          <p className="mt-2">Loading stock data...</p>
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-muted">No stock products found with current filters.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead className="table-light">
            <tr>
              <th>Product Title</th>
              <th>Platform</th>
              <th>Supplier</th>
              <th>Stock Status</th>
              <th>Available</th>
              <th>Threshold</th>
              <th>Price ($)</th>
              <th>Prev Price ($)</th>
              <th>Price Δ (%)</th>
              <th>Price Status</th>
              <th>Last Checked</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.title}</td>
                <td>{prod.platform}</td>
                <td>{prod.supplier}</td>
                <td>
                  <span className={`badge bg-${getStockColor(prod.stock_status)}`}>
                    {prod.stock_status}
                  </span>
                </td>
                <td>{prod.available_quantity}</td>
                <td>{prod.threshold_quantity}</td>
                <td>${prod.current_price.toFixed(2)}</td>
                <td>${prod.previous_price.toFixed(2)}</td>
                <td>{prod.price_change_percentage?.toFixed(2)}%</td>
                <td>
                  <span className={`badge bg-${getPriceChangeColor(prod.price_change_status)}`}>
                    {prod.price_change_status}
                  </span>
                </td>
                <td>{new Date(prod.last_checked).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

// Helper functions to color badges
function getStockColor(status) {
  switch (status) {
    case "in_stock":
      return "success";
    case "low_stock":
      return "warning";
    case "out_of_stock":
      return "danger";
    default:
      return "secondary";
  }
}

function getPriceChangeColor(status) {
  switch (status) {
    case "increased":
      return "danger";
    case "decreased":
      return "success";
    case "unchanged":
      return "secondary";
    default:
      return "light";
  }
}

export default Products;
