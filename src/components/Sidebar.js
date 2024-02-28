import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar px-2 py-2">
      <h3>Mohamed</h3>
      <ul>
        <li>
          <NavLink to="/profile" onClick={() => console.log("Profile Clicked")}>
            <FontAwesomeIcon className="usericon" icon={faUser} />
            <span className="user-info">Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting">
            <FontAwesomeIcon className="settingicon" icon={faGear} />
            <span className="setting">Setting</span>
          </NavLink>
        </li>
        <hr />
        <li className="log-out mt-auto mb-3">
          <NavLink to={"/"}>
            <FontAwesomeIcon
              className="logout-icon"
              icon={faRightFromBracket}
            />
            <span>Log out</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
