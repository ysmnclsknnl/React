import "./App.css";
import Home from "./routes/Home";
import ProductDetail from "./routes/ProductDetail";
import NotFound from "./routes/NotFound";
import Favorites from "./routes/Favorites";
import { Header } from "./components/Header";
import { GlobalProvider } from "./GlobalContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="product/:productId" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
