import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

const PrivateRouter = () => {
  const { user, pass } = useContext(RecipeContext);

  return user === "celal" && pass === "1234" ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
