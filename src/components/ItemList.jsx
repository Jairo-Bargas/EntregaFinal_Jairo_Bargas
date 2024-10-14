import React from 'react'
import Item from './Item'
//EN ESTE COMPONENTE HACEMOS EL MAPEO DE LOS PRODUCTS Y DEVOLVEMOS UN ITEM POR CADA PRODUCT
const ItemList = ({products}) => {
  return (
    <div>
        {products.map(product => {
          return(
            <Item item={product} key={product.id}/> //A la izquierda va el nombre de la propiedad, como lo recibe el componente y a la derecha el nombre del componente padre.
          )
        })}
    </div>
  )
}

export default ItemList