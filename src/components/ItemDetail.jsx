import React, {useState, useContext} from 'react'
import ItemCount from './ItemCount'
import { Cart } from './CartProvider'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
    const {addCart} = useContext(Cart)
    const [itemCountVisibility, setItemCountVisibility] = useState(true)
    console.log(product)

    const handleCart = (quantity) =>{
      console.log(quantity)
      setItemCountVisibility(false)
      addCart(product, quantity)
    }


  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.picture} alt="imagen_producto" />
      <p>Color: {product.color}</p>
      <p>Talle: {product.size}</p>
      <span>Precio: {product.price}</span>
      {itemCountVisibility ? (<ItemCount stock={product.stock} initial={1} onAdd={handleCart} product={product}/>) : <Link to={'/cart'}><button>Go cart</button></Link>} 
      </div>
  )
}

export default ItemDetail

