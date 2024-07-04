import React from 'react'
import { useProductById } from '../hooks/useProductById'
import ItemDetailsContainer from '../components/ItemDetailComponent/ItemDetailComponent';
import { useParams } from 'react-router-dom';
import LoaderComponent from '../components/LoaderComponent/LoaderComponent';

const Item = () => {
const {id} = useParams()
  const { product, loading, error } = useProductById(id);
  return loading ? (
    <LoaderComponent/>)
    : error ? (<>Ocurrio un erro, por favor contactese con soporte. Pero le aseguramos que el problema NO es de Front, hablelo con la gente de Back</>
  ):(  <ItemDetailsContainer product={product}/>)

  
}

export default Item
