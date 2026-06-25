import { createContext, useEffect, useState } from "react";
import { getProducts } from "../api/productsApiService";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products);
      setLoading(false);
    });
  }, []);
  
  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};
