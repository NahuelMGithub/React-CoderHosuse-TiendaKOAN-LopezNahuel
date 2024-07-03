import React from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'
import LoaderComponent from '../components/LoaderComponent/LoaderComponent'
import useProducts from '../hooks/useProducts'

const Home = () => {
  const {items, loading} = useProducts("products");
  return loading? (<LoaderComponent/> ) :(
  <div>   <ItemListContainerComponent products={items}/> </div>
  )
}

export default Home
