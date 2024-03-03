import React from "react";
import Sidebar from "./Sidebar";

function Feedback() {
  return (
    <div className=" page">
      <Sidebar />
      <div className="content">
        <h1 className="p-relative">Feedback</h1>
        <div className="feedback grid-page"></div>
      </div>
    </div>
  );
}

export default Feedback;
