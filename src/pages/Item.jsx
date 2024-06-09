import React from 'react'
import { useProductById } from '../hooks/useProductById'
import ItemDetailsContainer from '../components/ItemDetailComponent/ItemDetailComponent';
import { useParams } from 'react-router-dom';

const Item = () => {
const {id} = useParams()
  const { product } = useProductById(id);
  return (
<ItemDetailsContainer product={product}/>
  )
}

export default Item
