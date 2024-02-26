import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faGear,
  faPen,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./profile.css";
export default function Profile() {
  return (
    <>
      <div className="profile">
        <div className="slider">
          <h1>profile</h1>
          <ul>
            <li className="active">
              <FontAwesomeIcon className="usericon" icon={faUser} />
              <span className="user-info"> User info</span>
            </li>
            <li>
              <FontAwesomeIcon className="settingicon" icon={faGear} />
              <span className="setting">Setting</span>
            </li>
            <li>
              <FontAwesomeIcon className="settingicon" icon={faBell} />
              <span className="setting">Notifications</span>
            </li>
          </ul>
          <button className="log-out mt-auto mb-3">
            <FontAwesomeIcon
              className="logout-icon"
              icon={faRightFromBracket}
            />
            <span>Log out</span>
          </button>
        </div>
        <div className="profile-info my-3">
          <div className="info">
            <div className="image">
              <img
                alt="upload file"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0LFhRvv9VG_gWlAS2HYkGe4Enn2V-BvHBg&usqp=CAU"
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
              <h3 className="m-0">luka adel</h3>
              <p className="m-0">Cairo, Egypt</p>
            </div>
          </div>
          <div className="proifle-form px-4">
            <form action="#" className="row g-4">
              <div className="col-sm-6">
                <label className="form-label m-0 text-muted">First Name</label>
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
              {/* <input type="text" placeholder="last name" />

              <input type="text" placeholder="phone" />
              <input type="email" placeholder="email" /> */}

              <button className="submit rounded-3 mt-4">Save Changes</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
