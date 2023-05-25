import React, { useReducer } from "react";

const initialValue = {
  name: "kuldeep",
  age: "23",
  city: "indore",
};

function reducer(state, action) {
  console.log(action.payload);

  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };

     case 'age':
        return {
            ...state,
            age: action.payload
        } 

     default:
        return {...state}   
  }
}

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  console.log(state);
  const change = () => {
    dispatch({ type: "name", payload: "kullu" });
  };
  return (
    <div>
      <button onClick={change}>Login</button>
      <button onClick={()=>{dispatch({ type: "age", payload: "21" })}}>
        register
      </button>
      <h4>{state.name}</h4>
      <p>{state.age}</p>
    </div>
  );
}
