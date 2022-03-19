import react, { useRef, useState } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const onAddAmountToTheCart = (event) => {
    event.preventDefault();
    const cartAmount = amountRef.current.value;
    const cartAmountNumber = +cartAmount;
    if (
      cartAmount.trim().length === 0 ||
      cartAmountNumber < 1 ||
      cartAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    } else {
      setAmountIsValid(true);
      props.onAddAmountToCart(cartAmountNumber);
    }
  };

  return (
    <form className={styles.form} onSubmit={onAddAmountToTheCart}>
      <Input
        ref={amountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          max: "5",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <h5>Enter A Number(1-5)</h5>}
    </form>
  );
};
export default MealItemForm;
