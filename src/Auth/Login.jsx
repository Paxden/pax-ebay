import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EbayCallback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = searchParams.get("code");

    if (!code) {
      console.error("No code found in URL");
      return;
    }

    const fetchToken = async () => {
      try {
        const res = await axios.post(
          "https://api.ebaydropshipping.com/api/auth/ebay/callback",
          { code } // Ensure it's in the body
        );

        const { token, user } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      } catch (err) {
        console.error("Callback error:", err);
        alert("Something went wrong during eBay login.");
      }
    };

    fetchToken();
  }, [searchParams, navigate]);

  return (
    <div className="container py-5 text-center">
      <h3>Completing eBay login...</h3>
    </div>
  );
}
export default EbayCallback;