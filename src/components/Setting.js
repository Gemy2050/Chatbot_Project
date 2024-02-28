import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./Setting.css";
import Sidebar from "./Sidebar";

export default function Setting() {
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
                  <p className="m-0">Cairo, Egypt</p>
                </div>
              </div>
              <form action="#" className="row g-4 mt-2">
                <div className="col-sm-6">
                  <label className="form-label m-0 text-muted">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label m-0 text-muted">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label m-0 text-muted">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-sm-6">
                  <label className="form-label m-0 text-muted">Location</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Location"
                  />
                </div>

                <button className="submit rounded-3 mt-4">Save Changes</button>
              </form>
            </div>
            {/* <div className="box"></div> */}
          </div>
        </div>
      </div>
    </>
  );
}
