
import React from 'react';
import Item from './Item'; // Asumo que 'Item' es otro componente que renderiza los detalles de cada producto
import styles from '../styles/itemlist.module.scss';

const ItemList = ({ products }) => {
  return (
    <div className={styles.ItemList}> {/* Aplica el estilo desde el SCSS */}
      {products.map((product) => (
        <Item item={product} key={product.id} />
      ))}
    </div>
  );
};

export default ItemList;