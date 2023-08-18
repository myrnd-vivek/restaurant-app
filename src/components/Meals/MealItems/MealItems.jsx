import React from 'react'
import "./MealItems.css"

const MealItems = () => {
  const mealItems = [
    {
      id: 1,
      name: "Sushi",
      desc: 'Finesh fish and veggies',
      price: 22.99
    },
    {
      id: 2,
      name: "Schintzel",
      desc: 'A german specialty!',
      price: 16.50
    },
    {
      id: 3,
      name: "Barbecue Burger",
      desc: 'American, raw, meaty',
      price: 12.99
    },
    {
      id: 4,
      name: "Green Bowl",
      desc: 'Healthy...and green..',
      price: 23.99
    }
  ]
  return (
    <div className='mealItem__container'>
      {
        mealItems.map((meal) => {
          return <section key={meal.id} className='mealItem'>
            <h1>{meal.name}</h1>
            <p>{meal.desc}</p>
            <p>${meal.price}</p>
          </section>
        })
      }
    </div>
  )
}

export default MealItems