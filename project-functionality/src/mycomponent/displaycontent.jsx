import React from "react";

const DisplayContent = ({ rupees,msg }) => {
  return (
    <div
      className="col-6 my-4"
      style={{ marginLeft: "auto", marginRight: "auto" }}
    >
      <div className="card">
        <div className="card-body">
          <h5 class="card-title">Rupees</h5>
          <p class="card-text">{rupees}</p>
          <p class="card-text" style={{padding:"10px",color:"red"}}>{msg}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayContent;
