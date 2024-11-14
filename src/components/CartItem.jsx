import React from 'react'

const CartItem = ({item}) => {
  return (
    <div>
        <img src={item.picture}/>
        <h2>{item.name}</h2>
        <p>{item.color}</p>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
        <button>Delete</button>

    </div>
  )
}

export default CartItem