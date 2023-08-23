import Header from "./components/Layout/Header/Header";
import Summary from "./components/Layout/Summary/Summary";
import MealItems from "./components/Meals/MealItems/MealItems";
import AddCart from "./components/Cart/AddCart";
import { useState } from "react";
import { CartContextProvider } from "./context/cart-context";

function App() {
  const [isCartOpen,setIsCartOpen] = useState(false)

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
      {isCartOpen && <AddCart onHideCart={hideCartHandler}/>}
    </CartContextProvider>
  );
}

export default App;
