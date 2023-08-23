import { createContext, useContext, useState } from "react";


const CartContext = createContext({
  items: [],
  totalAmount:0,
  totalCartItems: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  increaseAmount: (id) => {},
  decreaseAmount: (id) => {}
});


export const CartContextProvider = ({children}) => {
  const [cartItems,setCartItems] = useState([])
  const [totalAmount,setTotalAmount] = useState(0);
  const [totalCartItems,setTotalCartItems] = useState(0);

  const addItemToCartHandler = (item) => {
    setCartItems(prev => [...prev, item])
    setTotalAmount(prev => prev + +Math.round((item.price * item.amount)).toFixed(2))
    setTotalCartItems(prev => prev + +item.amount);
  };
  const removeItemToCartHandler = item => {};

  const increaseAmountHandler = id => {
    let price = 0;
    const newCartItem = cartItems.map((item) => {
      if(item.id === id) {
        item.amount = parseInt(item.amount) + 1;
        price = item.price;
      }
      return item;
    })
    setCartItems(newCartItem);
    setTotalAmount(prev => prev + price)
    setTotalCartItems(prev => prev + 1)
  }

  const decreaseAmountHandler = id => {
    let price = 0;
    const newCartItem = cartItems.map((item) => {
      if(item.id === id) {
        item.amount = parseInt(item.amount) - 1;
        price = item.price;
      }
      return item;
    })
    const filterItem = newCartItem.filter(item => item.amount !== 0);
    setCartItems(filterItem);
    setTotalAmount(prev => prev - price)
    setTotalCartItems(prev => prev - 1)
  }

  const cartContext = {
    items: cartItems,
    totalAmount,
    totalCartItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    increaseAmount: increaseAmountHandler,
    decreaseAmount: decreaseAmountHandler,
  }

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export const useCartContext = () => {
  return useContext(CartContext);
}

