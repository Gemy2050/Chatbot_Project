import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faGraduationCap,
  faRightFromBracket,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar px-2 py-2">
      <ul className="mt-3">
        <li>
          <NavLink to="/profile">
            <FontAwesomeIcon icon={faUser} />
            <span className="user-info">User info</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/setting">
            <FontAwesomeIcon icon={faGear} />
            <span className="setting">Setting</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/courses">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span className="setting">Courses</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/feedback">
            <FontAwesomeIcon icon={faStar} />
            <span className="setting">Feedback</span>
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
