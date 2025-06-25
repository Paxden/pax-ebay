import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

// Define your API URL directly or use a config file
const API_URL = "https://shots-dryer-peers-iowa.trycloudflare.com";

function EbayCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");
    const error = searchParams.get("error");

    if (error) {
      console.error("eBay auth error:", error);
      navigate("/auth/login?error=ebay_auth_failed");
      return;
    }

    if (!code) {
      navigate("/auth/login?error=missing_code");
      return;
    }

    fetch(`${API_URL}/api/ebay/auth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        redirect_uri: window.location.origin + "/ebay/callback",
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to authenticate");
        }
        return res.json();
      })
      .then((data) => {
        sessionStorage.setItem("ebay_access_token", data.access_token);
        sessionStorage.setItem("ebay_refresh_token", data.refresh_token);
        sessionStorage.setItem(
          "ebay_token_expiry",
          Date.now() + data.expires_in * 1000
        );
        navigate("/");
      })
      .catch((err) => {
        console.error("Authentication error:", err);
        navigate("/auth/login?error=auth_failed");
      });
  }, [searchParams, navigate]);

  return (
    <div className="container text-center py-5">
      <h4>Finalizing eBay Login...</h4>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default EbayCallback;
