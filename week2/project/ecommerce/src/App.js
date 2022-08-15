import "./App.css";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
