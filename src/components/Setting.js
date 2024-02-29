import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./Setting.css";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from "react";

function Setting() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const bodyHasDarkClass = document.body.classList.contains("dark-mode");
    setDarkMode(bodyHasDarkClass);
  }, []);

  const handleDarkMode = (e) => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(e.target.checked);
  };

  const handleColor = (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    console.log(e.target.parentElement);
    e.target.parentElement
      .querySelector("li.active")
      .classList.remove("active");

    e.target.classList.add("active");
  };

  const handleFontFamily = (e) => {
    console.log(e.target);
    console.log(e.target.dataset.font);
    document.body.style.fontFamily = e.target.dataset.font;
  };

  return (
    <>
      <div className="profile page">
        <Sidebar />
        <div className="profile-info content">
          <h1 className="p-relative">Setting</h1>
          <div className="grid-page profile-form">
            <div className="box">
              <div className="info">
                <div className="image">
                  <img
                    alt="upload file"
                    src="https://gemy2050.github.io/Dashboard/imgs/avatar.png"
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
                  <h3 className="m-0">Mohamed Omar</h3>
                  <p className="m-0 c-grey">Cairo, Egypt</p>
                </div>
              </div>
              <form action="#" className="row g-4 mt-2">
                <div className="col-sm-6">
                  <label className="form-label m-0 c-grey">First Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label className="form-label m-0 c-grey">Last Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label className="form-label m-0 c-grey ">Phone</label>
                  <input type="number" className="form-control" />
                </div>
                <div className="col-sm-6">
                  <label className="form-label m-0 c-grey">Location</label>
                  <input type="text" className="form-control" />
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
                      <li data-color="#ff3150" onClick={handleColor}></li>
                      <li
                        data-color="#0075ff"
                        className="active"
                        onClick={handleColor}
                      ></li>
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
export default React.memo(Setting);
