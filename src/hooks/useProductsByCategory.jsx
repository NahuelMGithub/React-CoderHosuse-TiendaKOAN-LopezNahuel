import React from 'react'
import { getProductByCategory } from '../services/products';

export const useProductsByCategory = (category) => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(()=>{
getProductByCategory(category)
.then(res => setProducts(res.data.products))
.catch(err => console.log(err))
    }, [category]);
    return {products}
}


