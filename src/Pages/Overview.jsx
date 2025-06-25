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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const [isOpenNotify, setIsOpenNotify] = useState(false);
  const toggleNotifyBar = () => setIsOpenNotify(!isOpenNotify);

  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

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
      <SideBar isOpen={sidebarOpen} />
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
