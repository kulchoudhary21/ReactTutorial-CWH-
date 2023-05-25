import React, { useContext } from "react";
import { myContext } from "./ContextProvider/MyContextProvider";

const Login = () => {
  const { setIsLogin } = useContext(myContext);

  const doLogin = () => {
    setIsLogin(true)
  };

  return (
    <div>
      <button onClick={doLogin}>Login</button>
    </div>
  );
};

export default Login;
