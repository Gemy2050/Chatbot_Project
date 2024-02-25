import { useState } from "react";
import "./Register.css";
function Register() {
  const [signupState, setSignupState] = useState(true);

  return (
    <div className="register">
      <div className={`container ${signupState && "right-active"}`}>
        <div className="sign-up">
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button>Sign up</button>
            <p className="route">
              have an account?{" "}
              <span
                className="sign-in-btn"
                onClick={() => setSignupState(false)}
              >
                Sign in
              </span>
            </p>
          </form>
        </div>
        <div className="sign-in">
          <form action="#">
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button>Sign in</button>
            <a href="/">Forget your password?</a>
            <p className="route">
              create new account?{" "}
              <span
                className="sign-up-btn"
                onClick={() => setSignupState(true)}
              >
                Sign up
              </span>
            </p>
          </form>
        </div>
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
