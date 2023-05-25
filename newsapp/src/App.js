import React from "react";
import "./App.css";

class App extends React.Component {
  c = ()=>{
  console.log("Hellloo")
  }
  render() {
    return (
      <div>
          <h1>Hello this is my first class based componenet {this.c()}</h1>
      </div>
    )
  }
}

export default App;
