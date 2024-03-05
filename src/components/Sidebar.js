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
import { auth } from "../firebase";

function Sidebar() {
  return (
    <div className="sidebar px-2 py-2">
      <ul className="mt-3">
        <li>
          <NavLink to="/profile" exact="true">
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
        <hr />
        <li>
          <NavLink to="/feedback">
            <FontAwesomeIcon icon={faStar} />
            <span className="setting">Feedback</span>
          </NavLink>
        </li>
        <li className="log-out mt-auto mb-3">
          <NavLink to={"/register"} onClick={() => auth.signOut()}>
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
