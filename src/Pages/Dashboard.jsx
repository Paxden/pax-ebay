import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardCard from "../Component/DashboardCard";
import RecentActivity from "../Component/RecentActivity";
import {
  faArrowTrendDown,
  faCartShopping,
  faChartGantt,
  faChartLine,
  faCircleExclamation,
  faFile,
  faMoneyBillTrendUp,
  faRankingStar,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  const [selectedStore, setSelectedStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ebayToken, setEbayToken] = useState(null);

  // Get both your regular token and eBay tokens
  const token = localStorage.getItem("token");
  const accessToken = sessionStorage.getItem("ebay_access_token");
  const refreshToken = sessionStorage.getItem("ebay_refresh_token");
  const tokenExpiry = parseInt(sessionStorage.getItem("ebay_token_expiry"));

  // Check if eBay token is expired or about to expire (within 5 minutes)
  const isTokenExpiredOrExpiring = () => {
    if (!tokenExpiry) return true;
    const currentTime = Date.now();
    const bufferTime = 300000; // 5 minutes in milliseconds
    return currentTime >= (tokenExpiry - bufferTime);
  };

  // Refresh eBay token if needed
  const refreshEbayToken = async () => {
    try {
      const response = await axios.post(
        "https://boats-excess-codes-suitable.trycloudflare.com/api/ebay/auth/refresh",
        { refresh_token: refreshToken }
      );
      
      const newTokenData = response.data;
      sessionStorage.setItem("ebay_access_token", newTokenData.access_token);
      sessionStorage.setItem("ebay_refresh_token", newTokenData.refresh_token);
      sessionStorage.setItem(
        "ebay_token_expiry",
        Date.now() + newTokenData.expires_in * 1000
      );
      
      setEbayToken(newTokenData.access_token);
      return newTokenData.access_token;
    } catch (error) {
      console.error("Failed to refresh eBay token:", error);
      // Handle token refresh failure (e.g., redirect to login)
      return null;
    }
  };

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        // First check if we need to refresh the eBay token
        let currentAccessToken = accessToken;
        if (isTokenExpiredOrExpiring() && refreshToken) {
          currentAccessToken = await refreshEbayToken();
          if (!currentAccessToken) {
            throw new Error("Failed to refresh eBay token");
          }
        }

        // Fetch store data with your regular token
        const res = await axios.get("https://autosync.site/api/stores", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const connectedStores = res.data.data.stores;

        if (connectedStores.length > 0) {
          const storeId = connectedStores[0].id;

          // Fetch store details with your regular token
          const detailRes = await axios.get(
            `https://autosync.site/api/stores/${storeId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          setSelectedStore(detailRes.data.data.store);

          // Example: Fetch eBay-specific data using the eBay token
          if (currentAccessToken) {
            const ebayRes = await axios.get(
              "https://api.ebay.com/sell/inventory/v1/inventory_item",
              {
                headers: {
                  "Authorization": `Bearer ${currentAccessToken}`,
                  "Content-Type": "application/json"
                }
              }
            );
            console.log("eBay inventory data:", ebayRes.data);
          }
        }
      } catch (error) {
        console.error(
          "Error loading store info:",
          error.response?.data || error.message
        );
        // Handle unauthorized errors (token expired)
        if (error.response?.status === 401) {
          // Redirect to login or attempt token refresh
        }
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchStoreData();
  }, [token, accessToken, refreshToken]);

  return (
    <div className="page dashboard row">
      <div className="col-12 col-md-8">
        <h5>
          Dashboard
          {selectedStore
            ? ` - ${selectedStore.store_name} (${selectedStore.platform})`
            : ""}
        </h5>

        <div className="cards d-flex gap-4">
          <DashboardCard
            title={faRankingStar}
            count={selectedStore?.store_metrics?.active_listings || 0}
            content="Active Listings"
          />
          <DashboardCard
            title={faChartLine}
            count={selectedStore?.store_metrics?.sold_last_30_days || 0}
            content="Sold in 30 Days"
          />
          <DashboardCard
            title={faMoneyBillTrendUp}
            count={`$${
              selectedStore?.store_metrics?.revenue_last_30_days || 0
            }`}
            content="Revenue"
          />
        </div>

        {/* Alerts */}
        <div className="mt-4 mb-3 h5">Alerts</div>
        <div className="alert-cards d-flex gap-4">
          <DashboardCard
            title={faArrowTrendDown}
            count="5"
            content="Out of Stock"
            textColor="text-info"
            bgColor="bg-info-subtle"
            alert
          />
          <DashboardCard
            title={faChartGantt}
            count="10"
            content="Failed Listings"
            textColor="text-warning"
            bgColor="bg-warning-subtle"
            alert
          />
          <DashboardCard
            title={faCircleExclamation}
            count="15"
            content="VeRo Warnings"
            textColor="text-danger"
            bgColor="bg-danger-subtle"
            alert
          />
        </div>

        {/* Quick actions */}
        <div className="mt-4 mb-3 h6">Quick Actions</div>
        <div className="quick-actions justify-content-between mx-1 mx-md-5 d-flex">
          <button className="btn py-2 px-md-3 btn-sm bg-secondary-subtle d-flex gap-2 align-items-center">
            <FontAwesomeIcon icon={faSquarePlus} />
            Add New Listing
          </button>
          <button className="btn py-2 px-md-3 btn-sm bg-primary-subtle d-flex gap-2 align-items-center">
            <FontAwesomeIcon icon={faFile} />
            Go to Sales Report
          </button>
          <button className="btn py-2 px-md-3 d-flex gap-2 align-items-center btn-sm bg-success-subtle">
            <FontAwesomeIcon icon={faCartShopping} />
            Manage Orders
          </button>
        </div>
      </div>

      <RecentActivity className="col-12 col-md-4" />
    </div>
  );
};

export default Dashboard;