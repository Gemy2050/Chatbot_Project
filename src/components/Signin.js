import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Loader from "./Loader";

function SignIn({ setSignupState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleShowPassword = () => {
    if (!showPassword) {
      setShowPassword(true);
    } else {
      setShowPassword(false);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      if (!email.match(/^\w+@gmail\.com$/)) {
        Swal.fire("email is not valid", "", "error");
        return;
      }

      if (password.length < 8) {
        Swal.fire("Password must be at least 8 characters", "", "error");
        return;
      }
      setLoading(true);
      let res = await signInWithEmailAndPassword(auth, email, password);

      if (res?.user?.emailVerified) {
        navigate("/profile", { replace: true });
      } else {
        console.log("Navigate To Verify");
        navigate("/verify", { replace: true, state: window.location.pathname });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire(error.message, "", "error");
    }
  };

  const resetPassword = () => {
    if (!email.match(/^\w+@gmail\.com$/)) {
      Swal.fire("email is not valid", "", "error");
      return;
    }
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        setLoading(false);

        Swal.fire("Password reset email sent!", "", "success");
      })
      .catch((error) => {
        setLoading(false);

        Swal.fire(error.message, "", "error");
      });
  };

  return (
    <>
      {loading && <Loader />}
      <div className="sign-in">
        <form action="#">
          <h1>Sign in</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-group position-relative p-0 w-100">
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon
              icon={faEye}
              className="password-eye"
              onClick={handleShowPassword}
            />
          </div>
          <button disabled={loading} onClick={login}>
            {loading ? "Loading..." : "Sign in"}
          </button>
          <span className="forget" onClick={resetPassword}>
            Forget your password?
          </span>
          <p className="route">
            create new account?{" "}
            <span className="sign-up-btn" onClick={() => setSignupState(true)}>
              Sign up
            </span>
          </p>
        </form>
      </div>
    </>
  );
}

export default SignIn;
