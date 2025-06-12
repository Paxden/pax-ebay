import React from "react";

// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";

function DashboardCard({ title, content, count, alert, textColor, bgColor }) {
  return (
    <div className={`dashboard-card d-flex align-items-center justify-content-between gap-md-4 rounded-3 shadow-sm p-3 ${alert ? bgColor : ""}`}>
      <FontAwesomeIcon icon={title} className={`h3 title m-0 p-0 ${alert ? textColor : ""}`} />
      <div className="">
        <h5 className="m-0 p-0 ">{count}</h5>
        <p className=" m-0 p-0 ">{content}</p>
      </div>
    </div>
  );
}

export default DashboardCard;
