import "./App.css";
import AvatarImages from "./componenets/avatar";
import BasicUsage from "./my content/basic-usage";
import AutoComplete from "./componenets/autocomplete";
import Button_mui from "./componenets/Button";
function App() {
  return <div>
    <BasicUsage/>
    <hr/>
      {/* <AutoComplete></AutoComplete> */}
      <hr/>
      <Button_mui/>
      <AvatarImages/>
  </div>;
}

export default App;
