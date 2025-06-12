import React from "react";

// Librares
import { NavLink } from "react-router-dom";
import { Form, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

function Store() {
  return (
    <div className="store-setting  d-flex flex-wrap gap-2 mt-3">
      <div className="side-tab w-25 p-3">
        <p className="mt-3  mb-2 h6">Select Store</p>

        <ListGroup>
          <ListGroup.Item action variant="secondary">
            <div className="supplier d-flex justify-content-between align-items-center">
              <p>Amazon US</p>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </ListGroup.Item>
        </ListGroup>
        <hr />

        <div className="d-flex gap-3 align-items-center">
          <FontAwesomeIcon icon={faPlus} />
          <p>Add Store</p>
        </div>
      </div>

      <div className="store-container w-75 rounded shadow p-3 border">
        <h5>General Setting</h5>

        <p>Default Currency</p>
        <Form.Select className="w-25" disabled>
          <option>USD</option>
        </Form.Select>

        <h5 className="mt-3">General Actions</h5>
        <div className="w-50 setting-card rounded border shadow p-2">
          <h6>Resync Store</h6>
          <p className="my-2">
            Resync your store to automatically remove any products no longer
            listed in your store and to mark all your listed products that are
            not on AutoDS as ‘Untracked’. By resyncing your store, you will also
            syn the price and quantity from your store.
          </p>
          <div className="btn btn-sm btn-outline-primary">Resync Store</div>
        </div>
      </div>
    </div>
  );
}

export default Store;
