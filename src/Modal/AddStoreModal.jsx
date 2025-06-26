import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Spinner, Alert } from "react-bootstrap";
import axios from "axios";

const API_BASE_URL = "https://autosync.site/api";
const STORAGE_KEY = "connectedStore";

function AddStoreModal({ show, handleClose, token, onStoreConnected }) {
  const [platform, setPlatform] = useState("ebay");
  const [storeName, setStoreName] = useState("");
  const [loading, setLoading] = useState({
    initiating: false,
    completing: false,
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Handle OAuth callback when modal opens
  useEffect(() => {
    if (!show) return;

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    if (code && state && platform === "ebay") {
      handleEbayCallback(code, state);
    }
  }, [show]);

  const initiateConnection = async () => {
    setLoading({ initiating: true, completing: false });
    setError(null);
    setSuccess(null);

    try {
      if (platform === "ebay") {
        // Initiate eBay OAuth flow
        const response = await axios.post(
          `${API_BASE_URL}/stores/ebay/auth`,
          {
            store_name: storeName || "My eBay Store",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data?.auth_url) {
          // Redirect to eBay authorization page
          window.location.href = response.data.auth_url;
        } else {
          throw new Error("Authentication URL not received");
        }
      } else {
        // Handle other platforms (Amazon, Shopify)
        const response = await axios.post(
          `${API_BASE_URL}/stores/connect`,
          {
            platform,
            store_name: storeName || `My ${platform} Store`,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        handleSuccess(response.data?.store);
      }
    } catch (err) {
      console.error("Connection error:", err);
      setError(
        err.response?.data?.message ||
          "Failed to initiate connection. Please try again."
      );
    } finally {
      setLoading({ initiating: false, completing: false });
    }
  };

  const handleEbayCallback = async (code, state) => {
    setLoading({ initiating: false, completing: true });
    setError(null);

    try {
      // Get store ID from localStorage or use a default
      const storedStore = localStorage.getItem(STORAGE_KEY);
      const storeId = storedStore ? JSON.parse(storedStore).id : 2;

      const response = await axios.get(
        `${API_BASE_URL}/stores/ebay/callback/${storeId}`,
        {
          params: { code, state },
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Clean the URL
      window.history.replaceState({}, document.title, window.location.pathname);

      handleSuccess(response.data?.store);
    } catch (err) {
      console.error("OAuth callback error:", err);
      setError(
        err.response?.data?.message ||
          "Failed to complete eBay authentication. Please try again."
      );
    } finally {
      setLoading({ initiating: false, completing: false });
    }
  };

  const handleSuccess = (storeData) => {
    // Prepare store info object
    const storeInfo = {
      id: storeData?.id || 2,
      name: storeData?.store_name || storeName || `My ${platform} Store`,
      platform: platform,
      connectedAt: new Date().toISOString(),
    };

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storeInfo));

    // Show success message
    setSuccess(`${platform} store connected successfully!`);

    // Close modal and notify parent after delay
    setTimeout(() => {
      if (onStoreConnected) {
        onStoreConnected(storeInfo);
      }
      handleClose();
    }, 2000);
  };

  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Connect {platform} Store</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Platform</Form.Label>
            <Form.Select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              disabled={loading.initiating || loading.completing}
            >
              <option value="ebay">eBay</option>
              <option value="amazon">Amazon</option>
              <option value="shopify">Shopify</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Store Name</Form.Label>
            <Form.Control
              type="text"
              placeholder={`My ${platform} Store`}
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              disabled={loading.initiating || loading.completing}
            />
          </Form.Group>
        </Form>

        {error && (
          <Alert variant="danger" className="mt-3">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error}
          </Alert>
        )}

        {success && (
          <Alert variant="success" className="mt-3">
            <i className="bi bi-check-circle-fill me-2"></i>
            {success}
          </Alert>
        )}

        {(loading.initiating || loading.completing) && (
          <div className="text-center my-3">
            <Spinner animation="border" variant="primary" />
            <p className="mt-2">
              {loading.completing
                ? "Completing eBay authentication..."
                : "Initiating connection..."}
            </p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={handleClose}
          disabled={loading.initiating || loading.completing || success}
        >
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={initiateConnection}
          disabled={loading.initiating || loading.completing || success}
        >
          {loading.initiating || loading.completing ? (
            <>
              <Spinner as="span" size="sm" animation="border" />
              <span className="ms-2">Connecting...</span>
            </>
          ) : (
            `Connect ${platform}`
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddStoreModal;
