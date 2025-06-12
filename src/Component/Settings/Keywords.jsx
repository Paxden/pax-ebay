import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkSlash } from "@fortawesome/free-solid-svg-icons";

function Keywords() {
  return (
    <div className="keywords">
      <div className="m-2 p-3 bg-secondary-subtle text-center py-5 d-flex flex-column gap-3">
        <FontAwesomeIcon className="fs-2" icon={faLinkSlash} />
        <h4>No Keywords Found!</h4>
        <p>Add keywords to block products from being imported to your store.</p>
        <div>
          <button className="btn btn-primary">Add Keywords</button>
        </div>
      </div>
    </div>
  );
}

export default Keywords;
