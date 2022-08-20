import "./App.css";
import { WindowsSizeContextProvider2 } from "./WindowsSizeContext2";
import { Avatar } from "./components/Avatar";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <WindowsSizeContextProvider2>
          <Title />
          <Avatar />
        </WindowsSizeContextProvider2>
      </header>
    </div>
  );
}

export default App;
