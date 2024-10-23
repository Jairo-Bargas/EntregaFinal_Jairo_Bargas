import React, { useState, useEffect} from 'react'
import products from '../assets/mockData.json'
import ItemDetail from '../components/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(()=> {
        setProduct(products[0])
    }, [])
  return (
    <ItemDetail product={product}/>
  )
}

export default ItemDetailContainer