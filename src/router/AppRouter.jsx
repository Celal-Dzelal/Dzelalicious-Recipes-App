import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Details from "../pages/details/Details";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/errorPage/NotFound";
import Register from "../pages/register/Register";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/details" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;
