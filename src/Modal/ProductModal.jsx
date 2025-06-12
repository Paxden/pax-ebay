import React from "react";

// libraries
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
function ProductModal({ show, handleClose, product }) {
  if (!product) return null;

  const {
    productName,
    productPrice,
    productUnit,
    productImg,
    productPlatform,
  } = product;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{productName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={productImg} alt={productName} className="img-fluid" />
        <p>Price: ${productPrice}</p>
        <p>Unit: {productUnit}</p>
        <p>Platform: {productPlatform}</p>
      </Modal.Body>
    </Modal>
  );
}

export default ProductModal;
