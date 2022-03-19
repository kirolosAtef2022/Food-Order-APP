import React, { Fragment } from "react";
import styles from "./Header.module.css";
import ReactImage from "../../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h2>MealsApp</h2>
        <HeaderCartButton onShow = {props.onShownCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={ReactImage} alt="All Sort of Delicious Meals" />
      </div>
    </Fragment>
  );
};
export default Header;
