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
import { useState } from "react";
import Swal from "sweetalert2";
import Loader from "./Loader";

function Sidebar() {
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    try {
      setLoading(true);
      await auth.signOut();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("error in logout", error.message);
      Swal.fire("something went wrong", "", "error");
    }
  };

  if (loading) {
    return <Loader />;
  }

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
          <button className="log-out" onClick={logout}>
            <FontAwesomeIcon
              className="logout-icon"
              icon={faRightFromBracket}
            />
            <span>Log out</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
