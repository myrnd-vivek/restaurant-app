import React from "react";
import "./AddCart.css";
import Modal from "../UI/Modal";
import { useCartContext } from "../../context/cart-context";

const AddCart = ({onHideCart}) => {
	const {totalAmount} = useCartContext()
	
	return (
		<Modal>
			<div className="container">
				<h4 className="container__title">Sushi</h4>
				<div className="container__amount">
					<h2>Total Amount</h2>
					<h2>{totalAmount}</h2>
				</div>
				<div className="container__btn">
					<button className="btn" onClick={() => onHideCart()}>Close</button>
					<button className="btn">Order</button>
				</div>
			</div>
		</Modal>
	);
};

export default AddCart;
