import React from "react";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Form } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

function AddUntrackedProducts() {
  return (
    <div>
      <h2>Add Untracked Products</h2>

      <div className="mt-3 d-flex align-items-center justify-content-between">
        <div className="d-flex gap-3">
          <Form.Check />
          <small>0 Result Selected</small>
        </div>
        <div className="btn btn-sm btn-warning">Import with CSV</div>
      </div>

      <ListGroup className="add-untracked-container px-0 px-md-3 mt-3">
        <ListGroup.Item className="d-flex flex-column flex-md-row gap-3 align-items-md-center justify-content-between">
          <div className="d-flex gap-4 align-items-center">
            <Form.Check />
            <img
              src="https://via.placeholder.com/40"
              alt="Product thumbnail"
              width="40"
              height="40"
              className="rounded"
            />
            <div>
              <h6 className="mb-0">Product Name</h6>
              <small>Description goes here</small>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center gap-5">
              <div className="d-flex flex-md-colum align-items-center gap-2">
                {" "}
                <div className="btn btn-sm btn-outline-warning">Connect</div>
                <br />
                <small className="text-warning">Sourcing Request</small>
              </div>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        </ListGroup.Item>
        <ListGroup.Item className="d-flex flex-column flex-md-row gap-3 align-items-md-center justify-content-between">
          <div className="d-flex gap-4 align-items-center">
            <Form.Check />
            <img
              src="https://via.placeholder.com/40"
              alt="Product thumbnail"
              width="40"
              height="40"
              className="rounded"
            />
            <div>
              <h6 className="mb-0">Product Name</h6>
              <small>Description goes here</small>
            </div>
          </div>
          <div>
            <div className="d-flex align-items-center gap-5">
              <div className="d-flex flex-md-colum align-items-center gap-2">
                {" "}
                <div className="btn btn-sm btn-outline-warning">Connect</div>
                <br />
                <small className="text-warning">Sourcing Request</small>
              </div>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default AddUntrackedProducts;
