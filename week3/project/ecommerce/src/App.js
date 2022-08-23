import "./App.css";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import NotFound from "./Pages/NotFound";
import Favorites from "./Pages/Favorites";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="product/:productId" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
