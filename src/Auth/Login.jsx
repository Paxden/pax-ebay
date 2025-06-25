import React from "react";

function Login() {
  const CLIENT_ID = "ADESINAQ-Nextinn-PRD-df037993b-1a54357b";
  const REDIRECT_URI =
    "https://tracked-sample-showed-damage.trycloudflare.com/auth/ebay/callback";

  const SCOPES = [
    "https://api.ebay.com/oauth/api_scope",
    "https://api.ebay.com/oauth/api_scope/sell.marketing.readonly",
    "https://api.ebay.com/oauth/api_scope/sell.marketing",
    "https://api.ebay.com/oauth/api_scope/sell.inventory.readonly",
    "https://api.ebay.com/oauth/api_scope/sell.inventory",
    "https://api.ebay.com/oauth/api_scope/sell.account.readonly",
    "https://api.ebay.com/oauth/api_scope/sell.account",
    "https://api.ebay.com/oauth/api_scope/sell.fulfillment.readonly",
    "https://api.ebay.com/oauth/api_scope/sell.fulfillment",
    "https://api.ebay.com/oauth/api_scope/sell.analytics.readonly",
    "https://api.ebay.com/oauth/api_scope/sell.finances",
    "https://api.ebay.com/oauth/api_scope/sell.payment.dispute",
    "https://api.ebay.com/oauth/api_scope/commerce.identity.readonly",
    "https://api.ebay.com/oauth/api_scope/sell.reputation",
    "https://api.ebay.com/oauth/api_scope/sell.reputation.readonly",
    "https://api.ebay.com/oauth/api_scope/commerce.notification.subscription",
    "https://api.ebay.com/oauth/api_scope/commerce.notification.subscription.readonly",
    "https://api.ebay.com/oauth/api_scope/sell.stores",
    "https://api.ebay.com/oauth/api_scope/sell.stores.readonly",
    "https://api.ebay.com/oauth/scope/sell.edelivery",
    "https://api.ebay.com/oauth/api_scope/commerce.vero",
  ].join(" ");

  const buildEbayAuthURL = () => {
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      response_type: "code",
      redirect_uri: REDIRECT_URI,
      scope: SCOPES,
    });

    return `https://auth.ebay.com/oauth2/authorize?${params.toString()}`;
  };

  const handleLogin = () => {
    window.location.href = buildEbayAuthURL();
  };

  return (
    <div className="login-page text-center mt-5">
      <h3>Welcome Back</h3>
      <p className="text-secondary">Login with eBay to continue</p>

      <button onClick={handleLogin} className="btn btn-primary mt-3">
        Login with eBay
      </button>
    </div>
  );
}

export default Login;

