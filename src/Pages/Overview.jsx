import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

// Libraries
import "bootstrap/dist/css/bootstrap.min.css";

// Pages and Components
import "./Overview.css";
import SideBar from "../Component/SideBar";
import TopBar from "../Component/TopBar";

const API_BASE_URL = "https://autosync.site/api";

function Overview() {
  // const data = {
  //   access_token:
  //     "v^1.1#i^1#I^3#r^0#p^3#f^0#t^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",
  //   expires_in: 7200,
  //   refresh_token:
  //     "v^1.1#i^1#p^3#r^1#I^3#f^0#t^Ul4xMF80OjdGMTBERDJFREYxMjEwMjE4NkQ4MkExRkVGREY1NzYzXzFfMSNFXjI2MA==",
  //   refresh_token_expires_in: 47304000,
  //   token_type: "User Access Token",
  // };

  // // Store tokens securely (consider using httpOnly cookies for production)
  // sessionStorage.setItem("ebay_access_token", data.access_token);
  // sessionStorage.setItem("ebay_refresh_token", data.refresh_token);
  // sessionStorage.setItem(
  //   "ebay_token_expiry",
  //   Date.now() + data.expires_in * 1000
  // );

  // console.log("Authentication successful! Tokens stored.");

  // const token = sessionStorage.getItem("ebay_access_token");

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJlbWFpbCI6ImFkZXgyMDEwb25saW5lQGdtYWlsLmNvbSIsIm5hbWUiOiJUZXN0IFVzZXIiLCJyb2xlIjoidXNlciIsImlhdCI6MTc1MDkzNjY1NiwibmJmIjoxNzUwOTM2NjU2LCJqdGkiOiIwMzRjMTc1MjE0ZGVhNThiODIyYzQzOGRiZjk5NTNlZSIsImV4cCI6MTc1MDk0MDI1Nn0.sLh6W3abP3kOARHK9p44mU9xIIMGKQMbVefUKwgALJ0";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const [isOpenNotify, setIsOpenNotify] = useState(false);
  const toggleNotifyBar = () => setIsOpenNotify(!isOpenNotify);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get("code"); // eBay OAuth code
    const platform = params.get("state") || "ebay"; // Optional `state` param if used
    const error = params.get("error");

    if (code && token) {
      const connectStore = async () => {
        try {
          const res = await axios.post(
            `${API_BASE_URL}/stores/connect`,
            {
              platform,
              auth_code: code,
              store_name: "MyEbayStore", // Replace with a better name if needed
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          alert(`✅ Store connected: ${res.data.data.store.store_name}`);
        } catch (err) {
          console.error("Error connecting store:", err);
          alert("❌ Failed to connect store. Please try again.");
        } finally {
          // Clear query params
          navigate(location.pathname, { replace: true });
        }
      };

      connectStore();
    }

    if (error) {
      alert("❌ eBay Authentication Failed.");
      navigate(location.pathname, { replace: true });
    }
  }, [location.search, token, navigate, location.pathname]);

  return (
    <div className="overview">
      <SideBar token={token} isOpen={sidebarOpen} />
      <div className="main-section">
        <TopBar
          toggleSidebar={toggleSidebar}
          toggleNotifyBar={toggleNotifyBar}
        />
        <div className="sections">
          <div className="section p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
