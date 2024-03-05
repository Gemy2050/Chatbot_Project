import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";

const GlobalContext = createContext(null);

export default function GlobalProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const addUser = (theUser) => {
    setUser(theUser);
  };

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        getUserInfo(userAuth.uid);
      } else {
        localStorage.removeItem("loggedIn");
        setUser(null);
        navigate("/register");
      }
    });
  }, []);

  const getUserInfo = (id) => {
    const docRef = doc(db, "users", id);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        let user = doc.data();
        setUser(user);

        if (user) {
          localStorage.setItem("loggedIn", "true");
        }
      }
    });
  };

  const handleAuth = (user) => {
    let isLogged = localStorage.getItem("loggedIn");
    if (user) {
      return false;
    }
    if (isLogged && !user) {
      return true;
    } else if (!isLogged) {
      return <Navigate to={"/register"} />;
    }
  };

  return (
    <GlobalContext.Provider value={{ user, addUser, handleAuth }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(GlobalContext);
};
