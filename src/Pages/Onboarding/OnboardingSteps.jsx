import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Container,
  ProgressBar,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";

function OnboardingSteps() {
  const [step, setStep] = useState(1);

  // States for form data
  const [ebayConnected, setEbayConnected] = useState(false);
  const [marketplace, setMarketplace] = useState("");
  const [storeName, setStoreName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [timezone, setTimezone] = useState("");
  const [automation, setAutomation] = useState(false);

  // States for loading and error
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const EBAY_CLIENT_ID = "YOUR_EBAY_CLIENT_ID"; // 🔁 Replace
  const REDIRECT_URI = "http://localhost:3000/onboarding"; // 🔁 Replace
  const SCOPE = "https://api.ebay.com/oauth/api_scope";

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code");

    if (code && !ebayConnected) {
      const exchangeToken = async () => {
        setLoading(true);
        setErrorMsg("");
        try {
          const token = localStorage.getItem("accessToken");

          const res = await axios.post(
            "https://api.ebaydropshipping.com/v1/api/ebay/token",
            { code },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          localStorage.setItem("ebay_token", res.data.data.access_token);
          setEbayConnected(true);
          setStep(2);
        } catch (err) {
          setErrorMsg("Failed to connect eBay. Please try again.");
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      exchangeToken();
    }
  }, [location.search]);

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleConnectEbay = () => {
    const authUrl = `https://auth.ebay.com/oauth2/authorize?client_id=${EBAY_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&response_type=code&scope=${encodeURIComponent(SCOPE)}`;
    window.location.href = authUrl;
  };

  const handleFinish = async () => {
    setLoading(true);
    setErrorMsg("");

    const payload = {
      ebayConnected,
      marketplace,
      storeName,
      ownerName,
      timezone,
      automation,
    };

    try {
      // Replace this with your actual API call to save onboarding data
      console.log("🚀 Submitting onboarding payload:", payload);

      // Simulate delay
      await new Promise((res) => setTimeout(res, 1500));

      alert("🎉 Onboarding complete! Redirecting to dashboard...");
      // Navigate or call dashboard logic here
    } catch (err) {
      console.error(err);
      setErrorMsg("Failed to submit onboarding. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    if (loading) {
      return (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p className="mt-2">Processing...</p>
        </div>
      );
    }

    return (
      <>
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        {step === 1 && (
          <div className="text-center">
            <h4>Step 1: Connect eBay</h4>
            <p>Connect your eBay account to sync your listings.</p>
            <Button
              variant={ebayConnected ? "success" : "primary"}
              disabled={ebayConnected}
              onClick={handleConnectEbay}
            >
              {ebayConnected ? "Connected to eBay" : "Connect eBay Account"}
            </Button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h4>Step 2: Choose Marketplace</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Select Marketplace</Form.Label>
                <Form.Select
                  value={marketplace}
                  onChange={(e) => setMarketplace(e.target.value)}
                >
                  <option value="">Choose...</option>
                  <option value="US">United States (US)</option>
                  <option value="UK">United Kingdom (UK)</option>
                  <option value="DE">Germany (DE)</option>
                  <option value="AU">Australia (AU)</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
        )}
        {step === 3 && (
          <div>
            <h4>Step 3: Store Info</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Store Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Paxden Electronics"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Owner Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g. Paxden"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
        )}
        {step === 4 && (
          <div>
            <h4>Step 4: Set Time Zone</h4>
            <Form>
              <Form.Group>
                <Form.Label>Time Zone</Form.Label>
                <Form.Select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                >
                  <option value="">Choose...</option>
                  <option value="UTC+0">UTC+0</option>
                  <option value="UTC+1">UTC+1 (WAT – Nigeria)</option>
                  <option value="UTC+2">UTC+2</option>
                  <option value="UTC-5">UTC-5 (EST – US)</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
        )}
        {step === 5 && (
          <div>
            <h4>Step 5: Automation Settings</h4>
            <Form>
              <Form.Check
                type="switch"
                id="automation-switch"
                label="Enable Auto-Sync for new products"
                checked={automation}
                onChange={(e) => setAutomation(e.target.checked)}
              />
            </Form>
            <div className="mt-4 text-center">
              <Button variant="success" onClick={handleFinish}>
                Finish and Go to Dashboard
              </Button>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <Container
      className="my-5 p-4 border rounded shadow-sm bg-white"
      style={{ maxWidth: "600px" }}
    >
      <ProgressBar now={(step / 5) * 100} className="mb-4" />
      {renderStep()}
      {!loading && (
        <div className="d-flex justify-content-between mt-4">
          <Button
            variant="outline-secondary"
            onClick={handleBack}
            disabled={step === 1}
          >
            Back
          </Button>
          {step < 5 && (
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={
                (step === 2 && !marketplace) ||
                (step === 3 && (!storeName || !ownerName)) ||
                (step === 4 && !timezone)
              }
            >
              Next
            </Button>
          )}
        </div>
      )}
    </Container>
  );
}

export default OnboardingSteps;
