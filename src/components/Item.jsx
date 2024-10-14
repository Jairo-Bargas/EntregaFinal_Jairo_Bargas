import React from 'react'

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
        <button className='DetailsButton'>Ver detalles</button>
        </div> 
    </article>
     
  )
}

export default Item