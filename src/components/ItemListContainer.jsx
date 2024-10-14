import React, { useState } from 'react'
import products from '../assets/mockData.json'
import ItemList from './ItemList';
//ACA VA A ESTAR LA LÓGICA PARA TRAER LOS PRODUCTOS 
const ItemListContainer = () => {
//FALTA GENERAR LA PROMISE CON EL RETRASO DE DOS SEG.
      return <ItemList products={products}/>
        
    };

export default ItemListContainer