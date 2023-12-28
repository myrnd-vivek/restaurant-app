type Meal = {
	id: number;
	name: string;
	desc: string;
	price: number;
};

type MealWithAmount = Meal & {
  amount: number
}

type MealContext = {
	cartItems: MealWithAmount[];
	totalCartAmount: number;
	totalCartItems: number;
	addItem: (item: MealWithAmount) => void;
	increaseAmount: (id: number) => void;
	decreaseAmount: (id: number) => void;
};

export { Meal, MealWithAmount, MealContext };
