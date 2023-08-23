import { createContext, useContext, useState } from "react";


const CartContext = createContext({
  items: [],
  totalAmount:0,
  totalCartItems: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});


export const CartContextProvider = ({children}) => {
  const [cartItems,setCartItems] = useState([])
  const [totalAmount,setTotalAmount] = useState(0);
  const [totalCartItems,setTotalCartItems] = useState(0);

  const addItemToCartHandler = (item,amount) => {
    setCartItems(prev => [...prev, item])
    setTotalAmount(prev => parseInt(prev + (item.price * amount)))
    setTotalCartItems(prev => prev + +amount);
  };
  const removeItemToCartHandler = item => {};

  const cartContext = {
    items: cartItems,
    totalAmount,
    totalCartItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler
  }

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  return useContext(CartContext);
}

