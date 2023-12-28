import { createContext, useContext, useState } from "react";
import { MealContext, MealWithAmount } from "../types/meal.type";


interface Props {
  children: React.ReactNode;
}

const CartContext = createContext<MealContext | null>(null);


export const CartContextProvider:React.FC<Props> = ({children}) => {
  const [cartItems,setCartItems] = useState<MealWithAmount[]>([])
  const [totalCartAmount,setTotalCartAmount] = useState<number>(0);
  const [totalCartItems,setTotalCartItems] = useState<number>(0);

  const addItemToCartHandler = (item:MealWithAmount) => {
    setCartItems(prev => [...prev, item])
    setTotalCartAmount(prev => prev + (item.price * item.amount))
    setTotalCartItems(prev => prev + item.amount);
  };

  const increaseAmountHandler = (id:number) => {
    let price:number = 0;
    const newCartItem = cartItems.map((item:MealWithAmount) => {
      if(item.id === id) {
        item.amount = item.amount + 1;
        price = item.price;
      }
      return item;
    })
    setCartItems(newCartItem);
    setTotalCartAmount(prev => prev + price)
    setTotalCartItems(prev => prev + 1)
  }

  const decreaseAmountHandler = (id:number) => {
    let price:number = 0;
    const newCartItem = cartItems.map((item:MealWithAmount) => {
      if(item.id === id) {
        item.amount = item.amount - 1;
        price = item.price;
      }
      return item;
    })
    const filterItem = newCartItem.filter(item => item.amount !== 0);
    setCartItems(filterItem);
    setTotalCartAmount(prev => prev - price)
    setTotalCartItems(prev => prev - 1)
  }

  const cartContext = {
    cartItems,
    totalCartAmount,
    totalCartItems,
    addItem: addItemToCartHandler,
    increaseAmount: increaseAmountHandler,
    decreaseAmount: decreaseAmountHandler,
  }

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export const useCartContext = ():MealContext => {
  return useContext(CartContext) as MealContext;
}
