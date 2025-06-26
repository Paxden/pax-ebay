import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

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

    const authenticate = async () => {
      try {
        // In a real app, you would fetch from your backend:
        // const response = await fetch(`${API_URL}/api/ebay/auth/token`, {...});
        // const data = await response.json();

        // For demo purposes, using mock response:
        const data = {
          access_token:
            "v^1.1#i^1#I^3#r^0#p^3#f^0#t^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",
          expires_in: 7200,
          refresh_token:
            "v^1.1#i^1#p^3#r^1#I^3#f^0#t^Ul4xMF80OjdGMTBERDJFREYxMjEwMjE4NkQ4MkExRkVGREY1NzYzXzFfMSNFXjI2MA==",
          refresh_token_expires_in: 47304000,
          token_type: "User Access Token",
        };

        // Store tokens securely (consider using httpOnly cookies for production)
        sessionStorage.setItem("ebay_access_token", data.access_token);
        sessionStorage.setItem("ebay_refresh_token", data.refresh_token);
        sessionStorage.setItem(
          "ebay_token_expiry",
          Date.now() + data.expires_in * 1000
        );

        console.log("Authentication successful! Tokens stored.");

        // Wait 3 seconds before redirecting
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
      } catch (err) {
        console.error("Authentication error:", err);
        navigate("/auth/login?error=auth_failed");
      }
    };

    authenticate();
  }, [searchParams, navigate]);

  return (
    <div className="container text-center py-5">
      <h4>Authentication Successful! Redirecting to dashboard...</h4>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="mt-3">You'll be redirected in 3 seconds</p>
    </div>
  );
}

export default EbayCallback;
