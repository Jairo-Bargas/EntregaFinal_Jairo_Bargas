import React from 'react'
import {useState} from 'react'
import styles from '../styles/itemcount.module.scss'
import Cart  from './Cart'


const ItemCount = ({stock, initial, onAdd, addCart, product}) => {

    const [quantity, setQuantity] = useState(initial) //Se setea un estado inicial, indicando la cantidad inicial del contador

    const increment = () => {
        if (quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = () =>{
        if(quantity > 1){
                setQuantity(quantity-1)
        }
    } 

    const handleAddCart = () =>{
        addCart(item, quantity);
        onAdd(quantity)
    }

  return (
    <div className = "Counter">
        <div className = "Controls">
            <button className = "Button" onClick={decrement}>-</button>
            <h4 className = "Number">{quantity}</h4>
            <button className='Button' onClick={increment}>+</button>
        </div>
        <div>
            <button className='Button' onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
        <button onClick={()=>onAdd(quantity)}>Add cart</button>
    </div>
  )
}

export default ItemCount