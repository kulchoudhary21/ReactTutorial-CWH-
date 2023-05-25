import React from "react";
function Login({ change, name }) {
  return (
    <>
      <div>Login</div>
      <button onClick={() => change({ type: "name", payload: "gullu" })}>
        Change name
      </button>
      <h3>{name}</h3>
    </>
  );
}
export default Login;
