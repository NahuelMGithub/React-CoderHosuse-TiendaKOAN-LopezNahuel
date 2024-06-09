import React, { useState } from 'react'
import {getAllProducts} from '../services/products'

export const useProducts = () => {

    const [products, setProducts] = React.useState([]);
    React.useEffect(()=>{
        getAllProducts()
        .then(resp => setProducts(resp.data.products))
        .catch(res => console.log(res))
    }, []) 

  return {products}
    
  
}

export default useProducts
