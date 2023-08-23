import React from 'react'
import './CartItem.css'
import { useCartContext } from '../../context/cart-context'

const CartItems = ({item}) => {
  const {increaseAmount,decreaseAmount} = useCartContext()
  const increaseQuanityHandler = () => {
    increaseAmount(item.id);
  }
  const decreaseQuanityHandler = () => {
    decreaseAmount(item.id)
  }
  return (
    <div className='cartItem__container'>
      <h4 className=''>{item.name}</h4>
      <span>${item.price}</span>
      <span>x{item.amount}</span>
      <button onClick={decreaseQuanityHandler}>-</button>
      <button onClick={increaseQuanityHandler}>+</button>
    </div>
  )
}

export default CartItems