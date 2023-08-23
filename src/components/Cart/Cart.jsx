import React from "react";
import "./Cart.css";
import Modal from "../UI/Modal";
import { useCartContext } from "../../context/cart-context";
import CartItems from "./CartItems";

const Cart = ({onHideCart}) => {
	const {totalAmount,items} = useCartContext()	
	return (
		<Modal>
			<div className="container">
				<div className="cartItems">
					{
						items.map((item) => <CartItems key={item.id} item={item}/>)
					}
				</div>
				<div className="container__amount">
					<h2>Total Amount</h2>
					<h2>${totalAmount}</h2>
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
