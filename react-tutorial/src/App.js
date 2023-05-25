import "./App.css";
import { Useref } from "./MyComponent/useRef";
import { ContextState } from "./MyComponent/context/contextstate";
import { Header } from "./MyComponent/Dash/Header";
function App() {
  return (
    <div>
      <ContextState>
        <Useref />
        <Header />
      </ContextState>
    </div>
  );
}

export default App;
