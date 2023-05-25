import React, { createContext, useContext, useState } from "react";

export const myContext = createContext();

const MyContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const allContextValues = {
    isLogin,
    setIsLogin,
  };

  return (
    <myContext.Provider value={allContextValues}>{children}</myContext.Provider>
  );
};

export default MyContextProvider;
