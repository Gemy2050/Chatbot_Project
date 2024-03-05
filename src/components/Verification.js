import React, { useEffect, useState } from "react";
import { useAuth } from "../context/GlobalState";
import { auth, db } from "../firebase";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { doc, setDoc } from "firebase/firestore";
import { sendEmailVerification } from "firebase/auth";

function Verification() {
  const { user, addUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const checkEmailVerification = () => {
      const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
        if (userAuth) {
          if (user) {
            localStorage.setItem("user", JSON.stringify(user));
          } else if (localStorage.getItem("user")) {
            addUser(JSON.parse(localStorage.getItem("user")));
          }

          if (user && userAuth?.emailVerified) {
            console.log("The user", user);
            await setDoc(doc(db, "users", userAuth?.uid), user);

            localStorage.removeItem("user");
            Swal.fire("Email Verified Successfully", "", "success");
            navigate("/profile", { replace: true });
          }
        } else {
          navigate("/register", { replace: true });
        }
      });

      return () => unsubscribe();
    };

    checkEmailVerification();
  }, [navigate, user, auth]);

  // Redirect if User Verified Email Before
  if (location.state !== "/register") {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div
      className="verification px-md-5 mt-5 text-center "
      style={{ paddingTop: "80px" }}
    >
      <h2>Verification Email is Sent, check your inbox</h2>
      <h3 className="c-grey mt-3">
        Please, verify email then click below button
      </h3>
      <button
        className="btn btn-primary mt-3"
        onClick={() => window.location.reload()}
      >
        Continue After Verify
      </button>
      <br />
      <button
        className="text-primary mt-3 bg-transparent"
        disabled={clicked}
        onClick={() => {
          sendEmailVerification(auth.currentUser);
          setClicked(true);
          Swal.fire(
            "Verification email is sent to your email",
            "check your inbox",
            "success"
          );
        }}
      >
        click to send email again
      </button>
    </div>
  );
}

export default Verification;
