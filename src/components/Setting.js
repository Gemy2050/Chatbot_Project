import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./Setting.css";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/GlobalState";
import Loader from "./Loader";
// import { Navigate } from "react-router-dom";

function Setting() {
  const { user, handleAuth } = useAuth();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("Cairo, Egypt");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const bodyHasDarkClass = document.body.classList.contains("dark-mode");
    setDarkMode(bodyHasDarkClass);
  }, []);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhone(user.phone);
    }
  }, [user]);

  if (handleAuth(user)) {
    return <Loader />;
  }

  const handleDarkMode = (e) => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(e.target.checked);
  };

  const handleColor = (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    e.target.parentElement
      .querySelector("li.active")
      .classList.remove("active");

    e.target.classList.add("active");
  };

  const handleFontFamily = (e) => {
    document.body.style.fontFamily = e.target.dataset.font;
  };

  return (
    <>
      <div className="setting page">
        <Sidebar />
        <div className="setting-info content">
          <h1 className="p-relative">Setting</h1>
          <div className="grid-page setting-form">
            <div className="box">
              <div className="info">
                <div className="image">
                  <img
                    alt="upload file"
                    src={user?.profileIcon}
                    loading="lazy"
                  />
                  <label htmlFor="imageInput">
                    <FontAwesomeIcon icon={faPen} />
                  </label>
                  <input
                    type="file"
                    id="imageInput"
                    accept=".png, .jpg, .jpeg"
                    hidden
                  />
                </div>
                <div className="text">
                  <h3 className="m-0 text-capitalize">{user?.fullName}</h3>
                  <p className="m-0 c-grey">Cairo, Egypt</p>
                </div>
              </div>
              <form action="#" className="row g-4 mt-2">
                <div className="col-sm-6">
                  <label className="form-label m-0 c-grey">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label m-0 c-grey">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label m-0 c-grey ">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label m-0 c-grey">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>

                <button className="submit text-white rounded-3 mt-4">
                  Save Changes
                </button>
              </form>
            </div>
            <div className="box">
              <h3 className="text-center mb-3">Options</h3>
              <div className="options row">
                <div className="col-sm-6">
                  <div className="option-box rounded-2">
                    <h5 className=" mb-2">Colors</h5>
                    <ul className="colors-list d-flex mt-4 justify-content-center gap-3 align-items-center list-unstyled">
                      <li
                        data-color="#0075ff"
                        className="active"
                        onClick={handleColor}
                      ></li>
                      <li data-color="#ff3150" onClick={handleColor}></li>
                      <li data-color="#ff9800" onClick={handleColor}></li>
                      <li data-color="green" onClick={handleColor}></li>
                      <li data-color="#e91e63" onClick={handleColor}></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="option-box rounded-2">
                    <h5 className="mb-2">Dark Mode</h5>
                    <label style={{ lineHeight: 0 }}>
                      <input
                        onChange={handleDarkMode}
                        checked={darkMode}
                        type="checkbox"
                        className="toggle-checkbox dark-mode"
                      />
                      <div className="toggle-switch"></div>
                    </label>
                  </div>
                </div>
                <div className="">
                  <div className="option-box rounded-2">
                    <h5 className="mb-4 text-center">Font Family: </h5>
                    <ul className="font-list row g-3 list-unstyled">
                      <li className="active col-sm-4">
                        <input
                          type="radio"
                          className="toggle"
                          id="arial"
                          name="font"
                        />
                        <label
                          htmlFor="arial"
                          data-font="arial"
                          style={{ fontFamily: "Arial" }}
                          onClick={handleFontFamily}
                        >
                          Arial Font Family
                        </label>
                      </li>
                      <li className="col-sm-4">
                        <input
                          type="radio"
                          className="toggle"
                          id="cursive"
                          name="font"
                        />
                        <label
                          htmlFor="cursive"
                          data-font="cursive"
                          style={{ fontFamily: "cursive" }}
                          onClick={handleFontFamily}
                        >
                          Cursive Font Family
                        </label>
                      </li>
                      <li className="col-sm-4">
                        <input
                          type="radio"
                          className="toggle"
                          id="system-ui"
                          name="font"
                        />
                        <label
                          htmlFor="system-ui"
                          data-font="system-ui"
                          style={{ fontFamily: "system-ui" }}
                          onClick={handleFontFamily}
                        >
                          System-ui Font Family
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Setting;
