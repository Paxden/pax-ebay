import React from "react";
import DashboardCard from "../Component/DashboardCard";

// libraries
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
import "@fortawesome/fontawesome-free/css/all.min.css";

// Componentts
import RecentActivity from "../Component/RecentActivity";

const Dashboard = () => {
  return (
    <div className="page dashboard row">
      <div className="col-12 col-md-8">
        <h5>Dashboard</h5>

        <div className="cards d-flex gap-4">
          <DashboardCard
            title={faRankingStar}
            count="20"
            content="Active Items"
          />
          <DashboardCard
            title={faChartLine}
            count="30"
            content="Orders Today"
          />
          <DashboardCard
            title={faMoneyBillTrendUp}
            count="40"
            content="Profit Today"
          />
        </div>

        {/* Alerts */}
        <div className="mt-4 mb-3 h5">Alerts</div>
        <div className="alert-cards d-flex gap-4">
          <DashboardCard
            title={faArrowTrendDown}
            count="5"
            content="Out of Stock"
            textColor={"text-info"}
            bgColor={"bg-info-subtle"}
            alert={true}
          />
          <DashboardCard
            title={faChartGantt}
            count="10"
            content="Failed Listings"
            textColor={"text-warning"}
            bgColor={"bg-warning-subtle"}
            alert={true}
          />
          <DashboardCard
            title={faCircleExclamation}
            count="15"
            content="VeRo Warnings"
            textColor={"text-danger"}
            bgColor={"bg-danger-subtle"}
            alert={true}
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
