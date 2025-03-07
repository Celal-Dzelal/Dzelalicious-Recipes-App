import React, { useContext } from "react";

import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContextArea } from "../context/AuthContext";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContextArea);
  return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
