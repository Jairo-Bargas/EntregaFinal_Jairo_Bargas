import React, { useContext } from 'react'
import ItemDetail from './ItemDetail'
import { Cart as CartContext } from './CartProvider'
import CartItem from './CartItem'


const Cart = () => {
  const {cart} = useContext(CartContext)
  console.log({cart})
  return (
    <div>
      {
        cart.length ? 
        cart.map(cartItem => {
          return <CartItem item={cartItem} key={cartItem.id}/>
        })
        :
        <>
        <h2>El carrito está vacío</h2>
        <Link to={'/'}>Inicio</Link>
        </>
        
      }
    </div>
  )
}

export default Cart