import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Form } from "react-bootstrap";

function SingleProduct() {
  return (
    <div className="single-product">
      <Form>
        <Form.Group className="mb-3" controlId="formProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter product description"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter product price" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProductCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Enter product category" />
        </Form.Group>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
}

export default SingleProduct;
