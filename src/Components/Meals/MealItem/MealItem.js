import react, { useContext } from "react";
import CartContext from "../../Store/Cart-Context";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";
const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCntx = useContext(CartContext);
  const onAddAmountToCartHandler = (amount) => {
    cartCntx.addItem({
      id: props.id,
      key: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>

      <div>
        <MealItemForm onAddAmountToCart={onAddAmountToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
