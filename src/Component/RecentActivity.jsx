import React from "react";

function RecentActivity({ isOpenNotify }) {
  const profileImg = "https://avatar.iran.liara.run/public/boy";
  return (
    <div
      className={`p-3 ${
        isOpenNotify ? "openNotify" : "closeNotify "
      } recent-act shadow rounded-4`}
    >
      <div className="profile-preview d-none d-md-flex py-2 flex-column align-items-center gap-3">
        <img width="100px" src={profileImg} />
        <div className="profile-name text-center">
          <h6 className="m-0">Welcome Ali Reza</h6>
          <small className="m-0 ">
            Continue your journey to achieve target!
          </small>
        </div>
      </div>
      <hr />
      <div className="recent-activity">
        <h5 className="m-0">Recent Activity</h5>
        <ul className="list-group mt-3">
          <li className="list-group-item small text-break list-group-item-success">
            Added 5 new items to the inventory
          </li>
          <li className="list-group-item small text-break list-group-item-info">
            Updated stock levels for 3 items
          </li>
          <li className="list-group-item small text-break list-group-item-warning">
            Low stock alert for item #12345
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RecentActivity;
