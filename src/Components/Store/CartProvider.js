import  { useReducer } from "react";
import CartContext from "./Cart-Context";
const defualtCartValues = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const index = state.items.findIndex((item) => item.id === action.item.id);
    const value = state.items[index];
    let updatedItem;
    let updatedItems;
    if (value) {
      updatedItem = { ...value, amount: value.amount + action.item.amount };
      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const index = state.items.findIndex((item) => item.id === action.id);
    const value = state.items[index];
    const updatedTotalAmount = state.totalAmount - value.price;
    let updatedItem;
    let updatedItems;
    if (value.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItem = { ...value, amount: value.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[index] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defualtCartValues;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defualtCartValues
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cardContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cardContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
