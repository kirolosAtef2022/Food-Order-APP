import react, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";
import Meals from "./Components/Meals/Meals";
import Header from "./Components/Layout/Header";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const cartIsShownHandler = () => {
    setCartIsShown(true);
  };
  const cartIsHiddenHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Header onShownCart = {cartIsShownHandler} />
      {cartIsShown && <Cart onCloseCart ={cartIsHiddenHandler} />}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
