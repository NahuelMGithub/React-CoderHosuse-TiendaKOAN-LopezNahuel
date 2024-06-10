import React, { useState } from 'react'
import {getAllProducts} from '../services/products'

export const useProducts = () => {

  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
    React.useEffect(()=>{
        getAllProducts()
        .then(resp => setProducts(resp.data.products))
        .catch(res => console.log(res))
        .finally(()=>{
          setLoading(false)
        })
    }, []) 

  return {products, loading}
    
  
}

export default useProducts
