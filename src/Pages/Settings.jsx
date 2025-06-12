import React from "react";

// Libraries
import { NavLink } from "react-router-dom";

// Components
import { Outlet } from "react-router-dom";

function Settings() {
  return (
    <div className="settings">
      <h2>Settings</h2>

      {/* Top Links */}
      <div className="top-links d-flex flex-wrap align-items-center gap-3">
        <NavLink to="/settings" >
          <p className="active">Supplier Setting</p>
        </NavLink>
        <NavLink to='automation'>
          <p>Automations</p>
        </NavLink>
        <NavLink to='keyword'>
          <p>Keywords</p>
        </NavLink>
        <NavLink to='notification'>
          <p>Notifications</p>
        </NavLink>
        <NavLink to="store">
          <p>Store Setting</p>
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default Settings;
