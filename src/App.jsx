import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import CheckOut from "./pages/CheckOut";
import { ProductsProvider } from "./context/ProductsContext";
function App() {
  return (
    <ProductsProvider>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </div>
    </ProductsProvider>
  );
}

export default App;
