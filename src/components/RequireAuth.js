import React from "react";
import { useAuth } from "../context/GlobalState";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/register" state={{ path: location.pathname }} />;
  }

  return children;
}

export default RequireAuth;
