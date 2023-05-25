import React from "react";
import DisplayContent from "./displaycontent";
import Button from "./button";
import image1 from "./Images/image1.png";
import img from "./Images/img1.png";
import { useState } from "react";
export const MainButCont = () => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(0);

  let msg = "";
  let msg1=""
  let msg2=""
  let onclickAdd = () => {
    if (count1 == 10) {
      msg = "No more balance available..";
    } else {
      setCount1(count1 + 1);
      setCount2(count2 - 1);
    }
    if (count2 == 10) {
        msg1 = "No more balance available..";
      }
  };
  let onclickMinus = () => {
    if (count2 == 10) {
      msg = "No more balance available..";
    } else {
      setCount2(count2 + 1);
      setCount1(count1 - 1);
    }
  };
  if (count1 == 10) {
    msg1 = "No more balance available..";
  }
  return (
    <>
      <div className="col-6">
        <div className="row my-4">
          <DisplayContent rupees={count1} msg={msg2} />
          <Button image={image1} onclick={onclickAdd} />
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <DisplayContent rupees={count2} msg={msg1} />
          <Button image={img} onclick={onclickMinus} />
        </div>
      </div>
    </>
  );
};
export default MainButCont;
