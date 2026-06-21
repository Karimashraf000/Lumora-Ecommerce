import { useEffect, useState } from "react";
import { getProducts } from "../api/productsApiService";
import { ProductsContext } from "./CreateContext";

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products);
    });
  }, []);
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
