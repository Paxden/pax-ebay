import React from "react";
import { Outlet } from "react-router-dom";
import "./Auth.css";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Pages

function Auth() {
  return (
    <div className="auth-container">
      <div className="left-container">
        <div className="d-none d-md-block">
          <div className="brand text-primary  d-flex align-items-center gap-2">
            <FontAwesomeIcon icon={faCircle} />
            <h5 className="m-0">AutoSync</h5>
          </div>
        </div>
        <div className="d-block d-md-none">
          <div className="logo d-flex align-items-center justify-content-center">
            <div className="circle bg-primary"></div>
            <div className="glass p-4 text-darklight text-center h3">
              {" "}
              AutoSync
            </div>
          </div>
        </div>
        <div className="authentication">
          <Outlet />
        </div>
      </div>
      <div className="right-container d d-none d-md-block">
        <div className="lottie">
          <DotLottieReact
            className="w-100 play"
            src="https://lottie.host/3a0fceed-8cd4-443e-bb4b-ac6bfdc58199/ZIiHjqdF0I.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}

export default Auth;
