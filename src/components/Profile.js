import React from "react";
import Sidebar from "./Sidebar";

import "./Profile.css";

function Profile() {
  return (
    <div className="page">
      <Sidebar />
      <div className="content">
        <h1 className="p-relative">Profile</h1>
        <div className="grid-page profile-page">
          <div className="overview d-flex align-items-center py-md-5">
            <div className="avatar-box text-center p-3">
              <img
                src="https://gemy2050.github.io/Dashboard/imgs/avatar.png"
                alt="profile"
                loading="lazy"
              />
              <h4 className="my-2">Mohamed Omar</h4>
              <span className="d-block">Level 3</span>
              <div className="level rounded-4 position-relative">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>
            <div className="info-box w-100 px-md-3">
              <div className="box p-3 text-center text-md-start">
                <h4 className="m-0 mb-2 w-100">Personal Information: </h4>
                <div>
                  <span className="c-grey">Full Name: </span>
                  <span>Mohamed Omar</span>
                </div>
                <div>
                  <span className="c-grey">Email: </span>
                  <span>mo@mail.com</span>
                </div>
                <div>
                  <span className="c-grey">Phone: </span>
                  <span>01021595806</span>
                </div>
                <div>
                  <span className="c-grey">Gender: </span>
                  <span>Male</span>
                </div>
                <div>
                  <span className="c-grey">Country: </span>
                  <span>Egypt</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
