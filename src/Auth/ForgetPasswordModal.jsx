import { useState } from "react";

// libraries
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import { Modal, Button } from "react-bootstrap";

function ForgetPasswordModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="" className="border-bottom m-0 p-0 text-secondary" onClick={handleShow}>
        Forget password
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="d-flex gap-3 align-items-center">
              <FontAwesomeIcon icon={faUnlockKeyhole} />
              Forget Password
            </h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 className="my-2">
            Send a link to your email address to reset your password
          </h5>
          <form className="mt-3">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Enter your email address
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="example@mail.com"
                id="email"
                aria-label="Email"
              />
            </div>
            <div className="text-center">
              <Button variant="primary" onClick={handleClose}>
                Submit
              </Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ForgetPasswordModal;
