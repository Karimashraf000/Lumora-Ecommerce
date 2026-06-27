import { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/productsApiService";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products);
      setLoading(false);
    });
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        favoriteProducts,
        setFavoriteProducts,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
