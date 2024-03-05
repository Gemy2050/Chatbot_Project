import { useState } from "react";
import "./Register.css";
import SignIn from "./Signin";
import SignUp from "./Signup";
import { useAuth } from "../context/GlobalState";
import { Navigate } from "react-router-dom";

function Register() {
  const [signupState, setSignupState] = useState(true);

  const { user } = useAuth();
  if (user) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div className="register">
      <div className={`container ${signupState && "right-active"}`}>
        <SignUp setSignupState={setSignupState} />
        <SignIn setSignupState={setSignupState} />
        <div className="overlay-container">
          <div className="overlay-left">
            <h1>Welcome Back</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button id="signIn" onClick={() => setSignupState(false)}>
              Sign in
            </button>
          </div>
          <div className="overlay-right">
            <h1>Hello Friend</h1>
            <p>Enter your personal details and start journey with us</p>
            <button id="signUp" onClick={() => setSignupState(true)}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
