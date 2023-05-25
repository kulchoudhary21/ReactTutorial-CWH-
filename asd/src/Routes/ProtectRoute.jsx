import React, { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { myContext } from "../ContextProvider/MyContextProvider";

const ProtectRoute = () => {
  const { isLogin } = useContext(myContext);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLogin) navigate("/");
    else if (isLogin && location.pathname === "/") navigate("/home");
  }, [isLogin]);

  return <Outlet />;
};

export default ProtectRoute;
