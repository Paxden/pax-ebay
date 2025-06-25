import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function EbayCallback() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code) return;

    fetch("https://workers-playground-raspy-tooth-c980.paxdenco.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Access Token:", data.access_token);
        sessionStorage.setItem("ebay_access_token", data.access_token);
      })
      .catch((err) => console.error("Error:", err));
  }, [searchParams]);
  return (
    <div className="container text-center py-5">
      <h4>Finalizing eBay Login...</h4>
    </div>
  );
}

export default EbayCallback;
