import React, { useState, useEffect } from 'react';
import mockProducts from '../assets/mockData.json';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {

    (async()=>{
      try {
        let productsFiltered =[]
        if (categoryId) { /* Esto es para hacer un filtro diferente porque hay que filtrar en todo momento por si el usuario está dos horas logueado sin cambiar de pestaña y el precio por ejemplo cambió en ese tiempo */
          const q = query(collection(db, "products"), where("category", "==", categoryId));

          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            productsFiltered.push({id: doc.id, ...doc.data()})
          });
        } else{
          const querySnapshot = await getDocs(collection(db, "products"));
          querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`);
            productsFiltered.push({id: doc.id, ...doc.data()})
          });
        }
      

  setProducts(productsFiltered)
      } catch (error) {
        console.log(error)
      }
      
    })()


    /* if (categoryId) {
      productsFiltered = mockProducts.filter(f => f.category === categoryId);
    } else {
      productsFiltered = mockProducts;
    } */

    /* const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsFiltered);
      }, 2000);
    });

    myPromise.then((resolvedProducts) => {
      setProducts(resolvedProducts);
      setLoading(false); 
    }); */
  }, [categoryId]); 


  /* if (loading) {
    return <p>Cargando...</p>;
  } */
  return (products && <ItemList products={products} />);
};

export default ItemListContainer;