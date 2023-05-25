import { useState } from "react";
import NoteContext from "./context";
export const ContextState = (props) => {
  const [state, setState] = useState({
    name: "Kuldeep",
    profile: "Reactjs",
  });
  function update() {
    setTimeout(() => {
      setState({ name: "Cool", profile: "reactjs and nodejs" });
    });
  } 
  return (
    <div>
        <NoteContext.Provider value={{state,update}}>
        {props.children}
      </NoteContext.Provider>
    </div>
  );
};
