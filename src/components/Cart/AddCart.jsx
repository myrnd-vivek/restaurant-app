import React from 'react'
import "./AddCart.css"

const AddCart = () => {
  return (
    <div className='container'>
      <h4 className='container__title'>Sushi</h4>
      <div className='container__amount'>
        <h2>Total Amount</h2>
        <h2>35.62</h2>
      </div>
      <div className='container__btn'>
        <button className='btn'>Close</button>
        <button className='btn'>Order</button>
      </div>
    </div>
  )
}

export default AddCart