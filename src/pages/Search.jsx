import { useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductsContext } from "@/context/ProductsContext";
import ProductCard from "@/components/trendingSection/ProductCard";
import { CircleLoader } from "react-spinners";
import styles from "./Search.module.css";

export default function Search() {
  // 1. Get data from Context
  const { products, loading } = useContext(ProductsContext);

  // 2. Handle URL Search Parameters (e.g., ?q=phone)
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  // 3. Category State
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 4. Get unique categories from products
  const categories = ["All", ...new Set(products.map(p => p.category))];

  // 5. Filter products based on search text AND selected category
  const filteredItems = products.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 6. Update search query in URL
  const onSearchUpdate = (e) => {
    setSearchParams({ q: e.target.value });
  };

  return (
    <div className={styles.searchPage}>
      {/* Search Bar & Title */}
      <div className={styles.searchHeader}>
        <h1>Shop Our Collection</h1>
        
        <input
          type="text"
          placeholder="What are you looking for?"
          value={searchQuery}
          onChange={onSearchUpdate}
          className={styles.searchInput}
        />

        {/* Category Filter Buttons */}
        <div className={styles.categories}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`${styles.categoryBtn} ${selectedCategory === cat ? styles.active : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Show Loader if data is still fetching */}
      {loading ? (
        <div className={styles.loaderWrapper}>
          <CircleLoader color="var(--primary-color)" />
        </div>
      ) : (
        <div className={styles.resultsSection}>
          <p>We found {filteredItems.length} products</p>

          {/* Show list of products if results found, else show 'No products' */}
          {filteredItems.length > 0 ? (
            <div className={styles.resultsGrid}>
              {filteredItems.map(item => (
                <ProductCard key={item.id} {...item} imgUrl={item.thumbnail} />
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <h3>Nothing found for "{searchQuery}"</h3>
              <button onClick={() => {setSearchParams({}); setSelectedCategory("All");}}>
                Reset Search
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
