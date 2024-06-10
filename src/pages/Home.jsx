import React from 'react'
import ItemListContainerComponent from '../components/ItemListContainerComponent/ItemListContainerComponent'
import LoaderComponent from '../components/LoaderComponent/LoaderComponent'
import useProducts from '../hooks/useProducts'

const Home = () => {
  const {products, loading} = useProducts();
  return loading? (<LoaderComponent/> ) :(
  <div>   <ItemListContainerComponent products={products}/> </div>
  )
}

export default Home
