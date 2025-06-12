import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";

function Automation() {
  return (
    <div className="automation">
      <div className="m-2 p-3 bg-secondary-subtle text-center py-5 d-flex flex-column gap-3">
        <FontAwesomeIcon className="fs-2" icon={faLinkSlash} />
        <h5>
          Automate your pricing strategy by creating your first automation
        </h5>
        <div><button className="btn btn-primary">Add Automation</button></div>
      </div>
    </div>
  );
}

export default Automation;
