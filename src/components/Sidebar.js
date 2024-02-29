import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faRightFromBracket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar px-2 py-2">
      <ul className="mt-3">
        <li>
          <NavLink to="/profile" onClick={() => console.log("Profile Clicked")}>
            <FontAwesomeIcon className="usericon" icon={faUserCircle} />
            <span className="user-info">User info</span>
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
