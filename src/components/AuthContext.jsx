import React, { createContext, useContext, useState, useEffect } from "react";
import supabase from "./Superbase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const session = localStorage.getItem(
        "sb-yjpbwafaqiruoksqoxne-auth-token"
      );

      console.log(session);

      if (session) {
        setLoggedIn(true);
      }
    };
    checkSession();
  }, []);

  const login = async () => {
    try {
      console.log(data.session, "ctx");

      console.log(res, "ctx");
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      localStorage.removeItem("token");
      setLoggedIn(false);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
