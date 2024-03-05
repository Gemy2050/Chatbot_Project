import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

import logo from "../images/logo.jpeg";
import { useAuth } from "../context/GlobalState";

function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-md position-fixed start-0 end-0">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </NavLink>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav pt-5 pt-md-0 ms-auto">
            <span
              className="close d-md-none fs-2  ms-1"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
            >
              X
            </span>
            <li className="nav-item p-2 fw-bold">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item p-2 fw-bold">
              <NavLink to="/features" className="nav-link" aria-current="page">
                Features
              </NavLink>
            </li>
            <li className="nav-item  p-2 fw-bold">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>
            {user && (
              <li className="nav-item  p-2 fw-bold">
                <NavLink to="/profile" className="nav-link">
                  Profile
                </NavLink>
              </li>
            )}
            <li className="nav-item  p-2 fw-bold">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
          {!user && (
            <button
              onClick={() => navigate("/register")}
              className="register-btn ms-auto mt-2 mt-md-0 py-2 px-3 rounded-pill text-white"
            >
              Register
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Header;
