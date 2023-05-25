import React from "react";
const Button = ({ image, onclick }) => {
  const imgStyle = {
    backgroundColor: "blue",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "20px",
    height: "20px",
  };
  const butonStyle = {
    border: "3px solid blue",
  };
  return (
    <div>
      <div className="col-12">
        <button
          className="btn btn text-center"
          style={butonStyle}
          onClick={onclick}
        >
          <img src={image} alt="Button Image" style={imgStyle} />
        </button>
      </div>
    </div>
  );
};
export default Button;
