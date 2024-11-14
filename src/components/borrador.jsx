import React, { useState, useEffect } from 'react';
import mockProducts from '../assets/mockData.json';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    const fetchProduct = () => {
    let productsFiltered = [];
    if (categoryId) {
      productsFiltered = mockProducts.filter(f => f.category === categoryId);
    } else {
      productsFiltered = mockProducts;
    }
      setTimeout(() => {
        resolve(productsFiltered);
        setLoading(false);
      }, 2000);
    }
    fetchProduct();
    Swal.fire({
      title: 'Cargando...',
      text: 'Estamos obteniendo la información del producto',
      icon: 'info',
      allowOutsideClick: false, // Para evitar que el usuario cierre la alerta
      didOpen: () => {
        Swal.showLoading(); // Muestra el ícono de carga
      }
    });

    }, [categoryId])


  useEffect(() => {
    if (!loading) {
      Swal.close(); // Cierra el SweetAlert cuando termina de cargar
    }
  }, [loading]); // Este useEffect se ejecuta cuando `loading` cambia a `false`

  if (loading) {
    return null; // No renderizamos nada mientras se carga
  }
  return <ItemList products={products} />;
};

export default ItemListContainer;