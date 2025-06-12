import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

function SingleProduct({ show, handleClose }) {
  return (
    <div className="single-product-modal">
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex  gap-3">
            <FontAwesomeIcon className="mt-2" icon={faBoxOpen} />
            <div className="fs-7 text-secondary">
              <strong className="text-dark">Add Product</strong>
              <p className="fs-7">Publish to: Paxden</p>
            </div>
          </div>
          <h5 className="mt-3">Supplier URL or Product ID</h5>
          <Form className="d-flex align-items-center gap-3 rounded-5 px-4  py-2 border w-75">
            <input
              className="border-0 bg-transparent "
              type="search"
              placeholder="Enter Url or Product ID  "
            />
          </Form>

          <div className="d-flex gap-4 mt-4">
            <p>
              <strong className="text-secondary">Supplier Source:</strong>{" "}
              Aliexpress
            </p>
            <p>
              <strong className="text-secondary">Ship from Warehouse:</strong>{" "}
              China
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-3 justify-content-between">
            <Button variant="secondary" onClick={handleClose}>
              Publish to Store
            </Button>
            <Button variant="warning" onClick={handleClose}>
              Edit now
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SingleProduct;
