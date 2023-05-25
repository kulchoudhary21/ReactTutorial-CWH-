import "./App.css";
import Edit from "./MyComponent/Edit";
import Header from "./MyComponent/header";
import {Footer} from "./MyComponent/Footer";
import { Todos } from "./MyComponent/Todos";
function App() {
  const todo=[
    {
      sno : 1,
      title:"visit market",
      desc:"Going to market for buying some groceries"
    },
    {
      sno : 2,
      title:"picnic",
      desc:"Going for picnic to enjoy"
    },
    {
      sno : 3,
      title:"Mall",
      desc:"Going to mall for buying some cloths"
    }
  ]
  return (
    <div>
      <Header/>
      <Edit/>
      <Todos todos={todo}/>
      <Footer/>
    </div>
  );
}

export default App;

