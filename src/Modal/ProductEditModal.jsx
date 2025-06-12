import React, { useState, useEffect } from "react";

// Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

function ProductEditModal({ show, handleEditClose, product }) {
    const [formData, setFormData] = useState({
    productName: "",
    productPrice: 0,
    productUnit: 0,
    productPlatform: "",
    productImg: "",
  });
  // Pre-fill form when product changes
  useEffect(() => {
    if (product) {
      setFormData({
        productName: product.productName || "",
        productPrice: product.productPrice || 0,
        productUnit: product.productUnit || 0,
        productPlatform: product.productPlatform || "",
        productImg: product.productImg || "",
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
  return (
    <Modal show={show} onHide={handleEditClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="productPrice"
              value={formData.productPrice}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Units</Form.Label>
            <Form.Control
              type="number"
              name="productUnit"
              value={formData.productUnit}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Platform</Form.Label>
            <Form.Control
              type="text"
              name="productPlatform"
              value={formData.productPlatform}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="productImg"
              value={formData.productImg}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleEditClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleEditClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductEditModal;
