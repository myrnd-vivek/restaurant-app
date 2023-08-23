import React, { useState } from "react";
import "./MealItems.css";
import MealItem from "../MealItem/MealItem";

const MealItems = () => {
	const mealItems = [
		{
			id: 1,
			name: "Sushi",
			desc: "Finesh fish and veggies",
			price: 22.99,
		},
		{
			id: 2,
			name: "Schintzel",
			desc: "A german specialty!",
			price: 16.5,
		},
		{
			id: 3,
			name: "Barbecue Burger",
			desc: "American, raw, meaty",
			price: 12.99,
		},
		{
			id: 4,
			name: "Green Bowl",
			desc: "Healthy...and green..",
			price: 23.99,
		},
		{
			id: 5,
			name: "Green Bowl",
			desc: "Healthy...and green..",
			price: 23.99,
		},
		{
			id: 6,
			name: "Barbecue Burger",
			desc: "American, raw, meaty",
			price: 12.99,
		},
	];

	return (
		<div className="mealItem__container">
			{mealItems.map((meal) => {
				return <MealItem meal={meal} key={meal.id} />;
			})}
		</div>
	);
};

export default MealItems;
