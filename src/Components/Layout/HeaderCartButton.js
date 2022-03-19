import React, { useContext, useState, useEffect } from "react";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../Store/Cart-Context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const cartcntx = useContext(CartContext);
  const { items } = cartcntx;
  const [btnIsHighlighted, setBtnHighlighted] = useState(false);
  const numberOfCartItems = cartcntx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;

  useEffect(() => {
    if(items.length===0)
    {return;}
    setBtnHighlighted(true);
    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onShow}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};
export default HeaderCartButton;
