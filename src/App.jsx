import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import CheckOut from "./pages/CheckOut";
import RouteNotFound from "./pages/RouteNotFound";
import ProductDetails from "./pages/ProductDetails";
import { ProductsProvider } from "./context/ProductsContext";
import ScrollToTop from "./ScroolToTop";
function App() {
  return (
    <ProductsProvider>
      <div className="container">
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
        <Footer />
      </div>
    </ProductsProvider>
  );
}

export default App;
