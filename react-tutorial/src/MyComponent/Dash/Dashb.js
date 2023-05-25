import React, { useContext, useEffect, useState } from "react";
import nodeContext from "../context/context";
export const Dashb = () => {
  const [check, setCheck] = useState("a");
  const data = useContext(nodeContext);
  //  console.log(data)
  useEffect(() => {
    if (check == "John") {
      console.log("Yes...");
    } else {
      console.log("No...");
    }
  }, []);
  const update = () => {
    if (check === "John") {
      setCheck((p) =>p+'b')
    } else {
      setCheck((p) =>p+'c');
    }
    // setCheck(check+'b')
    // // setCheck(check+'c')
  };
  return (
    <>
      <div>Hii youi are using {check}</div>
      <div>
        Hey ! {data.state.name} You are on profile {data.state.profile}
      </div>
      <button
        onClick={() => {
          update();
        }}
      >
        Dash submit
      </button>
    </>
  );
};
