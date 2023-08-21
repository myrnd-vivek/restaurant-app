import { createPortal } from "react-dom";
import Header from "./components/Layout/Header/Header";
import Summary from "./components/Layout/Summary/Summary";
import MealItems from "./components/Meals/MealItems/MealItems";
import AddCart from "./components/Cart/AddCart";
import { useState } from "react";

function App() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Summary />
      <MealItems /> 
      {
        createPortal(
          <AddCart isOpen={isOpen} setIsOpen={setIsOpen} />,
          document.getElementById("overlay")
        )
      }
    </>
  );
}

export default App;
