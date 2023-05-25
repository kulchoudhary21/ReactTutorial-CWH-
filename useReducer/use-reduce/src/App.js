import { useReducer } from "react";
import Header from "./component/Header";

const initialValue={
  name:"Kuldeep",
}
function reducer(state,action){
  if(action.type=="name"){
    return {
      ...state,
      name:action.payload
    }
  }
}
function App() {
  const [state,dispatch]=useReducer(reducer,initialValue)
  return (
    <div >
      <Header name={state.name} change={dispatch}/>
    </div>
  );
}

export default App;
