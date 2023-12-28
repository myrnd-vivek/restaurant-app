import Modal from "../UI/Modal";
import CartItems from "./CartItems";
import { useCartContext } from "../../context/cart-context";

import "./Cart.css";

type Props = {
	onHideCart: () => void
}

const Cart = ({onHideCart}:Props) => {
	const {totalCartAmount,cartItems} = useCartContext()	
	return (
		<Modal>
			<div className="container">
				<div className="cartItems">
					{
						cartItems.map((item) => <CartItems key={item.id} item={item}/>)
					}
				</div>
				<div className="container__amount">
					<h2>Total Amount</h2>
					<h2>${totalCartAmount.toFixed(2)}</h2>
				</div>
				<div className="container__btn">
					<button className="btn" onClick={() => onHideCart()}>Close</button>
					<button className="btn">Order</button>
				</div>
			</div>
		</Modal>
	);
};

export default Cart;
