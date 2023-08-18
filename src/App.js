import { createPortal } from "react-dom";
import Header from "./components/Layout/Header/Header";
import Summary from "./components/Layout/Summary/Summary";
import MealItems from "./components/Meals/MealItems/MealItems";
import AddCart from "./components/Cart/AddCart";

function App() {
  return (
    <>
      <Header />
      <Summary />
      <MealItems /> 
      {
        createPortal(
          <AddCart />,
          document.getElementById("overlay")
        )
      }
    </>
  );
}

export default App;
