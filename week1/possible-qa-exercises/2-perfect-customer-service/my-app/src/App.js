import "./App.css";
import chat from "./chat.png";
import coin from "./coin.png";
import delivery from "./f-delivery.png";

import Guarantee from "./Components/Guarantee";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Guarantee
          image={delivery}
          title="Free shipping"
          description="Lorem Ipsum lorem ipsum"
        ></Guarantee>
        <Guarantee
          image={coin}
          title="100% Money back"
          description="Lorem Ipsumdadssfsddgdfghfgdfg"
        ></Guarantee>
        <Guarantee
          image={chat}
          title="Online support 24/7"
          description="wqeiuwehfdsdfndghrethsd sfsdfsdnfshskfn sdfkjsfskdfns "
        ></Guarantee>
      </header>
    </div>
  );
}

export default App;
