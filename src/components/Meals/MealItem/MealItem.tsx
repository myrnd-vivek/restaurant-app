import React, { useState } from "react";
import { useCartContext } from "../../../context/cart-context";
import { Meal } from "../../../types/meal.type";

type MealItemProps = {
	meal: Meal;
};

const MealItem = ({ meal }: MealItemProps) => {
	const [amount, setAmount] = useState<number>(0);
	const { addItem } = useCartContext();

	const amountChangeHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
		setAmount(parseInt(ev.target.value));
	};

	const addItemHandler = () => {
		addItem({...meal,amount})
		setAmount(0);
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
						value={amount || ""}
						onChange={amountChangeHandler}
						className="mealItem__quantityInput"
						min={1}
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
