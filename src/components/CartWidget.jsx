import React from 'react'
import cart from '../assets/cart.svg'

const CartWidget = () => {
  return (
    <>
    <img src={cart} alt="cart" />
    <span>5</span>
    </>
    
  )
}

export default CartWidget