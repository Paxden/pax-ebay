import React from "react";

// libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faBell } from "@fortawesome/free-solid-svg-icons";

const TopBar = ({ toggleSidebar, toggleNotifyBar }) => {
  const profileImg = "https://avatar.iran.liara.run/public/boy";

  return (
    <div className="top-bar d-flex justify-content-between align-items-center p-3">
      <div className="profile d-flex align-items-center gap-3">
        <FontAwesomeIcon
          className="d-block d-md-none"
          onClick={toggleSidebar}
          icon={faBarsStaggered}
        />
        <img width="40px" src={profileImg} />
        <div className="profile-name">
          <h6 className="m-0">Ali Reza</h6>
          <p className="m-0">example@mail.com</p>
        </div>
      </div>
      <FontAwesomeIcon
        onClick={toggleNotifyBar}
        icon={faBell}
        className="text-md-muted"
      />
    </div>
  );
};

export default TopBar;
