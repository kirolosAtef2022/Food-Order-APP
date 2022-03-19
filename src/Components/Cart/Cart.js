import react, { useContext } from "react";
import CartItem from "./CartItem";
import Model from "../UI/Model";
import CartContext from "../Store/Cart-Context";
import styles from "./Cart.module.css";
const Cart = (props) => {
  const cartContx = useContext(CartContext);
  const hasItems = cartContx.items.length > 0;
  const total_Amount = `$${cartContx.totalAmount.toFixed(2)}`;
  const onAddItemToTheCartHandler = (item) => {
    cartContx.addItem({ ...item, amount: 1 });
  };
  const onRemoveItemFromTheCartHandler = (id) => {
    cartContx.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAddItemToTheCart={onAddItemToTheCartHandler.bind(null, item)}
          onRemoveItemFromTheCart={onRemoveItemFromTheCartHandler.bind(
            null,
            item.id
          )}
        />
      ))}
    </ul>
  );

  return (
    <Model onClose={props.onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amounts</span>
        <span>{total_Amount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Model>
  );
};
export default Cart;
