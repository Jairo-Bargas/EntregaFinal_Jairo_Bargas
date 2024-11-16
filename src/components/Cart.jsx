import React, { useContext } from 'react'
import ItemDetail from './ItemDetail'
import { Cart as CartContext } from './CartProvider'
import CartItem from './CartItem'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 
import { db } from '../firebase/config';
import endPurchase from '../services/endPurchase';
import { Link } from 'react-router-dom';


const Cart = () => {
  const {cart} = useContext(CartContext)
  console.log({cart})

  const handlePurchase = ()=>{
    const order = {
      buyer: {
        name: "John",
        lastName: "Wick",
        email: "johnwiwi@gmail.com"
      },
      products: cart,
      total: 4992, //Después se debe recalcular esto utilizando reduce y useMemo
      timestamp: serverTimestamp()
    }
   
  ;(async()=>{
    try {
      const docRef = await addDoc(collection(db, "orders"), order)
      console.log("Document written with ID: ", docRef.id);
        }
        catch (error) {
          console.log(error)
        }
    } )()

  }


  return (
    <div>
        {cart.length ? (
        <>
         {cart.map(cartItem => {
          return <CartItem item={cartItem} key={cartItem.id}/>
        })}
        <button onClick={()=>endPurchase(cart)}>Finalizar compra</button>
        </> 
        ) :
        <>
        <h2>El carrito está vacío</h2>
        <Link to={'/'}>Inicio</Link>
        </>
        
      }
    </div>
  )
  }
export default Cart;