import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function AddStoreModal({ show, handleClose }) {
  return (
    <div className="add-store-modal">
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Form className="d-flex align-items-center gap-3 rounded-5 px-4  py-2 border w-75">
              <FontAwesomeIcon
                className="fa-sm text-secondary "
                icon={faMagnifyingGlass}
              />
              <input
                className="border-0 "
                type="search"
                placeholder="Search anything"
              />
            </Form>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center justify-content-between">
            <p>Tiktok(1)</p>
            <div className="text-primary text-sm">Unselect all</div>
          </div>
          <div className="d-flex align-items-center justify-content-between my-3">
            <div className="d-flex gap-3 align-items-center justify-content-between">
              <div className="d-flex gap-3 align-items-center">
                <Form.Check />
                <img
                  src="https://via.placeholder.com/40"
                  alt="Product thumbnail"
                  width="40"
                  height="40"
                  className="rounded"
                />
                <div>
                  <h6 className="mb-0">Store Name</h6>
                  <small>Description goes here</small>
                </div>
              </div>
            </div>
            <FontAwesomeIcon className="text-right" icon={faEllipsisVertical} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex gap-5 justify-content-between">
            <Button variant="secondary" onClick={handleClose}>
              Add Store
            </Button>
            <Button variant="warning" onClick={handleClose}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddStoreModal;
