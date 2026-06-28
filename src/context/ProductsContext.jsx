import { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/productsApiService";
import { setItemInLocalStorage ,getItemFromLocalStorage } from "../utils/localStorage";
export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favoriteProducts, setFavoriteProducts] = useState(
    () => getItemFromLocalStorage("favorites") ?? [],
  );
  const [cartItems, setCartItems] = useState(
    () => getItemFromLocalStorage("cart") ?? [],
  );
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    setItemInLocalStorage("cart", cartItems);
  }, [cartItems]);

  useEffect(() => {
    setItemInLocalStorage("favorites", favoriteProducts);
  }, [favoriteProducts]);
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
