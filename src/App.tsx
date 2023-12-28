import Header from "./components/Layout/Header/Header";
import Summary from "./components/Layout/Summary/Summary";
import MealItems from "./components/Meals/MealItems/MealItems";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import { CartContextProvider } from "./context/cart-context";

function App() {
  const [isCartOpen,setIsCartOpen] = useState<boolean>(false)

  const showCartHandler = () => {
    setIsCartOpen(true)
  }

  const hideCartHandler = () => {
    setIsCartOpen(false)
  }

  return (
    <CartContextProvider>
      <Header  onShowCart={showCartHandler}/>
      <Summary />
      <MealItems /> 
      {isCartOpen && <Cart onHideCart={hideCartHandler}/>}
    </CartContextProvider>
  );
}

export default App;
