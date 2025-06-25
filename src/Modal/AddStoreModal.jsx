import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form, Spinner, Alert } from "react-bootstrap";
import axios from "axios";

const API_BASE_URL = "https://autosync.site/api";
const EBAY_CLIENT_ID = "NOORNISH-ASAPMART-PRD-60e92398a-30b58e2b";
const REDIRECT_URI = "https://quanby.com.ng";
const EBAY_SCOPE = "https://api.ebay.com/oauth/api_scope";

function AddStoreModal({ show, handleClose, token, onStoreConnected }) {
  const platform = "ebay"; // fixed for now

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleConnectStore = () => {
    setError(null);

    const ebayAuthUrl = `https://auth.ebay.com/oauth2/authorize?client_id=${EBAY_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&response_type=code&scope=${encodeURIComponent(EBAY_SCOPE)}`;

    window.location.href = ebayAuthUrl; // Redirect to eBay OAuth
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (!code) return;

    const connectStore = async () => {
      setLoading(true);
      setError(null);

      try {
        const payload = {
          platform,
          auth_code: code,
          store_name: "MyEbayStore", // You can make this dynamic later
        };

        const response = await axios.post(
          `${API_BASE_URL}/stores/connect`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (onStoreConnected) {
          onStoreConnected(response.data.data.store.store_name);
        }

        // ✅ Clear code from URL only after success
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        );
      } catch (err) {
        console.error(
          "Store connection failed:",
          err.response?.data || err.message
        );
        setError(
          "Failed to connect store. Check your credentials or try again."
        );
      } finally {
        setLoading(false);
      }
    };

    connectStore();
  }, [token, onStoreConnected]);

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add a New Store</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Select Platform</Form.Label>
            <Form.Select disabled value="ebay">
              <option value="ebay">eBay</option>
            </Form.Select>
          </Form.Group>
        </Form>

        {error && (
          <Alert variant="danger" className="mt-3">
            {error}
          </Alert>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleConnectStore}
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Connecting...
            </>
          ) : (
            "Connect eBay Store"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddStoreModal;
