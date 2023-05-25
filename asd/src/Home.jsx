import React, { useContext, useReducer } from "react";
import { myContext } from "./ContextProvider/MyContextProvider";
import Button from "./Common/Button";
import HOComp from "./HOC/HOComp";
import Team from './Team'

const initVal = {
  name: "abvc",
  age: 10,
  city: "Pune",
  // .......
};
function reducer(state, action) {
  switch(action.type){
    case 'name':
      return {
        ...state,
        name: action.payload
      }
  }
}

const Home = () => {
  const { setIsLogin } = useContext(myContext);
  const [state, dispatch] = useReducer(reducer, initVal);

  console.log(state)
  const logOut = () => {
    setIsLogin(false);
  };

  const change = () => {
    dispatch({type: 'name', payload: 'User1'})
  };
  return (
    <div>
      Home

      <HOComp comp={<Team />} />

      <Button title='button1' color='red' type='num'/>
      <Button title='button2' color='blue' type='str' />
      <Button title='button3' color='red' />
      <Button title='button4' color='blue' />
      <Button title='button5' color='red' />
      <Button title='button6' color='blue' />

      <button onClick={change}>Change Name</button>
      <button onClick={() => {}}>state 2</button>
      <button>state 3</button>
      <button>state 4</button>
      <button>state 5</button>
      <button onClick={logOut}>Logout</button>
      <div style={{ marginTop: "20px" }}>
        <p>{state.age}</p> 
         <p>{state.name}</p>
      </div>
    </div>
  );
};

export default Home;
