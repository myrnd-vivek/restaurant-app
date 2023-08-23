import React, { useState } from "react";
import { useCartContext } from "../../../context/cart-context";

const MealItem = ({ meal }) => {
	const [amount, setAmount] = useState("");
	const { addItem } = useCartContext();

	const amountChangeHandler = (ev) => {
		setAmount(ev.target.value);
	};

	const addItemHandler = () => {
    addItem({...meal,amount})
    setAmount('')
  };

	return (
		<section className="mealItem">
			<div>
				<h1>{meal.name}</h1>
				<p>{meal.desc}</p>
				<p className="price">${meal.price}</p>
			</div>
			<div className="mealItem__quantity">
				<div>
					<label>Amount</label>
					<input
						type="number"
						value={amount}
						onChange={amountChangeHandler}
						className="mealItem__quantityInput"
					/>
				</div>
				<div className="mealItem__btnContainer">
					<button className="mealItem__btn" onClick={addItemHandler}>
						+Add
					</button>
				</div>
			</div>
		</section>
	);
};

export default MealItem;
