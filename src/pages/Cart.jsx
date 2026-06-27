import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";
import { IoAdd, IoRemove, IoTrashOutline, IoArrowBack } from "react-icons/io5";
import styles from "./Cart.module.css";
export default function Cart() {
  const { cartItems, setCartItems } = useContext(ProductsContext);
  const navigate = useNavigate();

  const updateQty = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, (item.qty || 1) + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce((acc, item) => {
    return acc + item.price * (item.qty || 1);
  }, 0);

  if (cartItems.length === 0)
    return (
      <div className={styles.cartPage}>
        <h2>Your Cart is Empty</h2>
        <button
          className={styles.startShoppingBtn}
          onClick={() => navigate("/search")}
        >
          Start Shopping
        </button>
      </div>
    );

  return (
    <div className={styles.cartPage}>
      <ul className={styles.cartItemsList}>
        {cartItems.map((item) => {
          const qty = item.qty || 1;
          return (
            <li key={item.id} className={styles.cartItem}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className={styles.itemImage}
              />

              <h3>{item.title}</h3>

              <div className={styles.quantityControl}>
                <button onClick={() => updateQty(item.id, -1)}>
                  <IoRemove />
                </button>
                <span>{qty}</span>
                <button onClick={() => updateQty(item.id, +1)}>
                  <IoAdd />
                </button>
              </div>

              <span>${(item.price * qty).toFixed(2)}</span>

              <button onClick={() => removeItem(item.id)}>
                <IoTrashOutline />
              </button>
            </li>
          );
        })}
      </ul>

      <div className={styles.summaryCard}>
        <div className={styles.summaryRow}>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          className={styles.checkoutBtn}
          onClick={() => navigate("/home")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
