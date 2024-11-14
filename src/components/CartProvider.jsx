import React from 'react'
import { createContext, useState } from 'react'

//Crear el contexto:
export const Cart = createContext()

// Crear el componente que va a proveer ese contexto = NombreProvider
const CartProvider = ({children})=>{
    const [cart , setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const addCart = (product, productQuantity) =>{
        const productInCart = isInCart(product.id)
        let cartUpdated = [...cart]
        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {
                if (cartProduct.id === product.id){ //cartproduct.id es el producto del carrito existente y el otro product.id es el que está viniendo por parámetro
                    return{
                        ...cartProduct,
                        quantity: cartProduct.quantity + productQuantity  //el primer quantity es la cantidad que nosotros tenemos en el carrito, product.quantity es lo que había inicialmente del producto y luego mas la cantidad que se está agregando
                    }
                }
                return cartProduct;
            })
        } else {
            cartUpdated.push({...product, quantity: productQuantity})
        }
        
        setCart(cartUpdated) 
        setQuantity(cartUpdated.length)

        //Manera incorrecta de hacer eso es: setCart(cart.push(product)) Porque el cart es un state y no se pueden hacer push a un state. El push se hace a una variable auxiliar que apunte a otra dirección de memoria. 
}

const isInCart = (productId) =>{
    return cart.some(cartProduct => cartProduct.id === productId)
}    
return (
        <Cart.Provider value = {{cart, quantity, addCart}}>{children}</Cart.Provider>
      )
}

 


export default CartProvider