import React, { useState, useEffect } from 'react';
import mockProducts from '../assets/mockData.json';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    let productsFiltered = [];
    if (categoryId) {
      productsFiltered = mockProducts.filter(f => f.category === categoryId);
    } else {
      productsFiltered = mockProducts;
    }

    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsFiltered);
      }, 2000);
    });

    myPromise.then((resolvedProducts) => {
      setProducts(resolvedProducts);
      setLoading(false); 
    });
  }, [categoryId]);


  if (loading) {
    return <p>Cargando...</p>;
  }
  return <ItemList products={products} />;
};

export default ItemListContainer;