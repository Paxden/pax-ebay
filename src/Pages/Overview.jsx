import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

// Libraries
import "bootstrap/dist/css/bootstrap.min.css";

// Pages and Components
import "./Overview.css";
import SideBar from "../Component/SideBar";
import TopBar from "../Component/TopBar";
import RecentActivity from "../Component/RecentActivity";

function Overview() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const [isOpenNotify, setIsOpenNotify] = useState(false);
  const toggleNotifyBar = () => setIsOpenNotify(!isOpenNotify);
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
