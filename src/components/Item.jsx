import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = ({item}) => {
  return (
    <article className='CardItem'>
        <div>
        <h3>{item.name}</h3>
        <img src={item.picture} alt="" />
        <section className='Info'>
            <p>{item.price}</p>
            <p>{item.stock}</p>
        </section>
        <Link to={`/item/${item.id}`} >
        <button className='DetailsButton'>Ver detalles</button>
        </Link>
        <ItemCount initial={1} stock={45} onAdd={(quantity)=> console.log('Cantidad agregada', quantity)}/>

        
        </div> 
    </article>
     
  )
}

export default Item