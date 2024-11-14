import React, { useState, useEffect } from 'react';
import products from '../assets/mockData.json';
import ItemDetail from '../components/ItemDetail';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';


const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = () => {
      const productFound = products.find(product => product.id === parseInt(id, 10));


      setTimeout(() => {
        setProduct(productFound);
        setLoading(false);
      }, 2000); 
    };

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
    
  }, [id]); 

  useEffect(() => {
    if (!loading) {
      Swal.close(); // Cierra el SweetAlert cuando termina de cargar
    }
  }, [loading]); // Este useEffect se ejecuta cuando `loading` cambia a `false`

  if (loading) {
    return null; // No renderizamos nada mientras se carga
  }

  return (product && <ItemDetail product={product} />);
};

export default ItemDetailContainer;
