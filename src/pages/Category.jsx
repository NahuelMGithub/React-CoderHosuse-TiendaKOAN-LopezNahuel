import React from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'
import { useParams } from 'react-router-dom'
import { useProductsByCategory } from '../hooks/useProductsByCategory'

const Category = () => {
  const {id} = useParams()

  const {products} = useProductsByCategory(id)
  return (
    <div>
      <ItemListContainerComponent products={products}/>
    </div>
  )
}

export default Category
