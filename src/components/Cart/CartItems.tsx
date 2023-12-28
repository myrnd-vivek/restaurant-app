import { useCartContext } from "../../context/cart-context";
import { MealWithAmount } from "../../types/meal.type";

import "./CartItem.css";

type Props = {
  item: MealWithAmount
}

const CartItems = ({ item }:Props) => {
	const { increaseAmount, decreaseAmount } = useCartContext();
	const increaseQuanityHandler = () => {
		increaseAmount(item.id);
	};
	const decreaseQuanityHandler = () => {
		decreaseAmount(item.id);
	};
	return (
		<div className="cartItem__container">
			<div>
				<h4 className="">{item.name}</h4>
				<span>${item.price}</span>
				<span>x{item.amount}</span>
			</div>
			<div>
				<button onClick={decreaseQuanityHandler} className="btn__quantity">-</button>
				<button onClick={increaseQuanityHandler} className="btn__quantity">+</button>
			</div>
		</div>
	);
};

export default CartItems;
