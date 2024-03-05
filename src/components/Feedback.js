import React from "react";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSadCry,
  faFaceFrown,
  faFaceMeh,
  faFaceGrinHearts,
  faFaceGrinWide,
} from "@fortawesome/free-solid-svg-icons";

import "./Feedback.css";
function Feedback() {
  return (
    <div className="page">
      <Sidebar />
      <div className="content px-2">
        <h1 className="p-relative">Feedback</h1>
        <div className="feedback">
          <div>
            <h3>How Are You Feeling?</h3>
            <p className="c-grey">
              your input is valuable in helping us better understand your needs
            </p>
            <div className="react-icon py-3 text-center">
              <FontAwesomeIcon icon={faFaceSadCry} />
              <FontAwesomeIcon icon={faFaceFrown} />
              <FontAwesomeIcon className="active" icon={faFaceMeh} />
              <FontAwesomeIcon icon={faFaceGrinWide} />
              <FontAwesomeIcon icon={faFaceGrinHearts} />
            </div>
            <div className="form">
              <textarea placeholder="Add a comment"></textarea>
              <button>Submit Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
