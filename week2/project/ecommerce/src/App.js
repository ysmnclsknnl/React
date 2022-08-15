import "./App.css";
import Home from "./Routes/Home";
import ProductDetail from "./Routes/ProductDetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductDetail />}>
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
