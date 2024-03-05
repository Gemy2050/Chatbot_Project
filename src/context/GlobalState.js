import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import AppReducer, { initialState } from "./AppReducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext(null);

export default function GlobalProvider({ children }) {
  // const [state, dispatch] = useReducer(AppReducer, initialState);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const addUser = (theUser) => {
    setUser(theUser);
  };

  const getUserInfo = (id) => {
    console.log("Get USer Info Called");
    const docRef = doc(db, "users", id);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        let user = doc.data();
        console.log("USER", user);
        setUser(user);

        if (user) {
          localStorage.setItem("loggedIn", "true");
          console.log("Switched To Profile");
          navigate("/profile", { replace: true });
          console.log("User State2", user);
        }

        // dispatch({ type: "SET_USER", user: doc.data() });
        // console.log("User State", state.user);
      }
    });
  };

  //* Try Storing User in LocalStorage

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        getUserInfo(userAuth.uid);
      } else {
        console.log("No User");
        localStorage.removeItem("loggedIn", "true");

        setUser(null);
        // dispatch({ type: "SET_USER", user: null });
        navigate("/register", { replace: true });
      }
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ user, addUser }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(GlobalContext);
};

export const isLogged = () => {
  return localStorage.getItem("loggedIn");
};
