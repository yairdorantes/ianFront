import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { api } from "../api";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isOpenAuth, setIsOpenAuth] = useState(true);
  let [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const updateData = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  };

  const loginUser = (credentials) => {
    axios
      .post(`${api}/login`, credentials)
      .then((res) => {
        if (res.status === 200) {
          //   console.log(res.data.success);
          setUser(res.data.success);
          setIsOpenAuth(false);
          localStorage.setItem("user", JSON.stringify(res.data.success));
        }
        // setIsOpen(false);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setIsOpenAuth(true);
        // setTimeout(() => {
        //   setIsError(false);
        // }, 2500);
      });
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const contextData = {
    loginUser,
    user,
    updateData,
    logoutUser,
    isOpenAuth,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
