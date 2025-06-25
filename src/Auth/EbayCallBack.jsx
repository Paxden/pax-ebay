import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function EbayCallback() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");

    if (!code) return;

    const CLIENT_ID = "ADESINAQ-Nextinn-PRD-df037993b-1a54357b";
    const CLIENT_SECRET = "PRD-f037993b2484-ab56-4cbd-aa9f-7190"; // 🔴 Never expose in production
    const REDIRECT_URI =
      "https://casinos-give-preferences-require.trycloudflare.com/auth/ebay/callback";

    const basicAuth = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`); // base64(client_id:client_secret)

    const body = new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: REDIRECT_URI,
    });

    fetch("https://api.ebay.com/identity/v1/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${basicAuth}`,
      },
      body: body.toString(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Access Token", data.access_token);
        localStorage.setItem("ebay_access_token", data.access_token);
      })
      .catch((err) => {
        console.error("❌ Token exchange failed", err);
      });
  }, [searchParams]);

  return (
    <div className="container text-center py-5">
      <h4>Finalizing eBay Login...</h4>
    </div>
  );
}

export default EbayCallback;
