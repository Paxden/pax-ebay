import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function TrendingProductFilterBar({ onFilter }) {
  const [filters, setFilters] = useState({
    shipTo: "",
    shipFrom: "",
    currency: "",
    minPrice: "",
    maxPrice: "",
    supplier: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    const cleared = {
      shipTo: "",
      shipFrom: "",
      currency: "",
      minPrice: "",
      maxPrice: "",
      supplier: "",
    };
    setFilters(cleared);
    onFilter && onFilter(cleared);
  };

  const handleFilter = () => {
    onFilter && onFilter(filters);
  };

  return (
    <Form className="">
      <Row className="gy-2 shadow rounded-2 p-3 gx-3 align-items-end">
        <Col xs={6} md={2}>
          <Form.Label>Ship To</Form.Label>
          <Form.Select
            name="shipTo"
            value={filters.shipTo}
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="NG">Nigeria</option>
          </Form.Select>
        </Col>
        <Col xs={6} md={2}>
          <Form.Label>Ship From</Form.Label>
          <Form.Select
            name="shipFrom"
            value={filters.shipFrom}
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option value="CN">China</option>
            <option value="US">United States</option>
            <option value="DE">Germany</option>
          </Form.Select>
        </Col>
        <Col xs={6} md={2}>
          <Form.Label>Currency</Form.Label>
          <Form.Select
            name="currency"
            value={filters.currency}
            onChange={handleChange}
          >
            <option value="">Any</option>
            <option value="USD">USD ($)</option>
            <option value="GBP">GBP (£)</option>
            <option value="NGN">NGN (₦)</option>
          </Form.Select>
        </Col>
        <Col xs={6} md={2}>
          <Form.Label>Min Price</Form.Label>
          <Form.Control
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handleChange}
            placeholder="0"
          />
        </Col>
        <Col xs={6} md={2}>
          <Form.Label>Max Price</Form.Label>
          <Form.Control
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handleChange}
            placeholder="1000"
          />
        </Col>
        <Col xs={6} md={2}>
          <Form.Label>Supplier</Form.Label>
          <Form.Control
            type="text"
            name="supplier"
            value={filters.supplier}
            onChange={handleChange}
            placeholder="e.g. Paxden Global"
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col xs={12} className="d-flex gap-3">
          <Form.Group controlId="filterCategory">
            <Form.Select>
              <option>All Category</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Home & Kitchen</option>
              <option>Health & Beauty</option>
              <option>Office & School</option>
              <option>Automotive</option>
              <option>Others</option>
            </Form.Select>
          </Form.Group>
          <Button size="sm" variant="outline-primary">
            Best Sellers
          </Button>
          <Button size="sm" variant="outline-primary">
            Fast Shipping
          </Button>
        </Col>
        <Col xs={12} className="d-flex justify-content-end gap-2 mt-3 mt-md-0">
          <Button size="sm" variant="secondary" onClick={handleClear}>
            Clear Filters
          </Button>
          <Button size="sm" variant="primary" onClick={handleFilter}>
            Filter
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default TrendingProductFilterBar;
