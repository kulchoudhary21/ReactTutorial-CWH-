import { Button, TextField } from "@mui/material";
import { useEffect, useRef } from "react";
import { useState } from "react";

export function Useref() {
  //it crates mutable object which not re-render when any state change
  //it also access DOM Elemet directly..
  const [data, setData] = useState("");
  let inp = useRef("");
  //let c = useRef(0);
  //   useEffect(() => {
  //     c.current=c.current+1

  //   });
  
  let setValue = () => {
    console.log(inp.current.value);
  };
  let update = (e) => {
      setData(e.target.value)
  };
  return (
    <div
      style={{ padding: "20px", alignContent: "center", alignItems: "center" }}
    >
      <input
        value={data}
        ref={inp}
        type="text"
        label="enter text"
        variant="outlined"
        autoFocus={true}
        style={{ marginLeft: "auto", marginRight: "auto" }}
        onChange={update}
      />
      <Button variant="contained" onClick={setValue}>
        Contained
      </Button>
    </div>
  );
}
