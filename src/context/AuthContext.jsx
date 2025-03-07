import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../auth/firebase";

export const AuthContextArea = createContext();

const AuthContext = ({ children }) => {
  const navigate = useNavigate();
  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const loginUser = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  const logOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  const [currentUser, setCurrentUser] = useState();

  const userObs = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, password } = user;
        setCurrentUser({
          email: email,
          password: password,
        });
      } else {
        setCurrentUser(false);
      }
    });
  };

  useEffect(() => {
    userObs();
  }, []);

  return (
    <AuthContextArea value={{ createUser, loginUser, logOut, currentUser }}>
      {children}
    </AuthContextArea>
  );
};

export default AuthContext;
