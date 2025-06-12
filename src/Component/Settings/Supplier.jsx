import React from "react";

// Libraries
import { NavLink } from "react-router-dom";
import { Form, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";

function Supplier() {
  return (
    <div className="supplier d-flex  gap-2 mt-3 flex-wrap flex-md-nowrap">
      <div className="side-tab w-25 p-3">
        <label className="mb-2">Select a Store</label>
        <Form.Select aria-label="Select a Store">
          <option>Store Name</option>
          <option value="1">Store One</option>
          <option value="2">Store Two</option>
          <option value="3">Store Three</option>
        </Form.Select>
        <p className="mt-3  mb-2 h6">Supplier</p>

        <ListGroup>
          <ListGroup.Item action variant="secondary">
            <div className="supplier d-flex justify-content-between align-items-center">
              <p>Amazon US</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item action variant="outline-secondary">
            <div className="supplier d-flex justify-content-between align-items-center">
              <p>Aliexpress US</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item action variant="outline-secondary">
            <div className="supplier d-flex justify-content-between align-items-center">
              <p>Aliexpress UN</p>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </div>
          </ListGroup.Item>
        </ListGroup>
        <hr />

        <div className="d-flex gap-3 align-items-center">
          <FontAwesomeIcon icon={faPlus} />
          <p>Add Supplier</p>
        </div>
      </div>

      <div className="supplier-container p-1 rounded shadow border w-75">
        <div className="supplier-links text-truncate d-flex align-items-center gap-3">
          <NavLink>
            <p className="active">Draft</p>
          </NavLink>
          <NavLink>
            <p>Revised Listing</p>
          </NavLink>
          <NavLink>
            <p>Order</p>
          </NavLink>
          <NavLink>
            <p>Sales Report</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Supplier;
