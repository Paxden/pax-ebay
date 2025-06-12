import React from "react";

// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function ScheduledContainer() {
  return (
    <div className="schedule">
      <div className="mt-5 d-flex flex-column gap-3 align-items-center justify-content-center">
        <div className="rounded-circle bg-secondary-subtle add-icon fs-1 p-3 d-flex justify-content-center">
          <FontAwesomeIcon icon={faCartPlus} />
        </div>
        <h3>You don't have any scheduled items yet...</h3>
        <p>Save time and schedule your first upload here!</p>
        <div className="btn btn-md btn-primary">Add Products</div>
      </div>
    </div>
  );
}

export default ScheduledContainer;
