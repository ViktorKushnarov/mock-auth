import React, { useState, createContext, useEffect } from "react";
import { retriveStoredToken, calculateRemainingTime } from "../utils/helpers";

let logoutTimer;

const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token, expirationTime, user) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const tokenData = retriveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token; //localStorage.getItem('token');
  }

  const [token, setToken] = useState(initialToken);
  const [user, setUser] = useState(null);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  };

  const loginHandler = (token, expirationTime, user) => {
    setToken(token);
    if (user) {
      setUser(user);
    }
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData]);

  const contextValue = {
    token: token,
    user: user,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
