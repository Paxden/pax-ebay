import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// Component
import DraftContainer from "../Component/Drafts/DraftContainer";

function Drafts() {
  return (
    <div className="drafts">
      <p className="h5">Uploads</p>
      <div className="d-flex border-bottom border-secondary-subtle mt-3 gap-3">
        <NavLink
          to="/drafts"
          className={({ isActive }) =>
            `h5 pb-3 text-secondary ${isActive ? "text-dark" : ""}`
          }
        >
          Drafts
        </NavLink>
        <NavLink
          to="scheduled"
          className={({ isActive }) =>
            `h5 pb-3 text-secondary ${isActive ? "text-dark" : ""}`
          }
        >
          Scheduled
        </NavLink>
        <NavLink
          to="recurring"
          className={({ isActive }) =>
            `h5 pb-3 text-secondary ${isActive ? "text-dark" : ""}`
          }
        >
          Recurring
        </NavLink>
      </div>
      <div className="mt-3">
        <Outlet />
      </div>
    </div>
  );
}

export default Drafts;
