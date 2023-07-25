import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import products from "../db/product.json"
const Cart = createContext();


const Context = ({ children }) => {
  

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byDelivery: false,
    searchQuery: "",
  });



  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
