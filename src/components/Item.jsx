import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import styles from '../styles/item.module.scss'  // Importamos el archivo SCSS del componente

const Item = ({ item }) => {
  // Estado para manejar el carrito
  const [cart, setCart] = useState([]);

  // Función que se pasa como onAdd a ItemCount
  const handleAdd = (quantity) => {
    // Aquí puedes agregar la lógica para agregar al carrito
    console.log(`Agregando ${quantity} unidades de ${item.name} al carrito`);
    
    // Actualizamos el carrito (esto es un ejemplo, puedes personalizarlo)
    setCart([...cart, { item, quantity }]);
  };

  return (
    <article className={styles.CardItem}>
      <div className={styles.CardContent}>
        <h3 className={styles.ProductName}>{item.name}</h3>
        <img src={item.picture} alt={item.name} className={styles.ProductImage} />
        <section className={styles.Info}>
          <p className={styles.Price}>{item.price}</p>
          <p className={styles.Stock}>Stock: {item.stock}</p>
        </section>
        <Link to={`/item/${item.id}`} className={styles.DetailsLink}>
          <button className={styles.DetailsButton}>Ver detalles</button>
        </Link>

        {/* Pasamos handleAdd como prop al ItemCount */}
        <ItemCount 
          initial={1} 
          stock={item.stock} 
          onAdd={handleAdd} 
          product={item} 
        />
      </div>
    </article>
  );
}

export default Item;
