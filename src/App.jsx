import React from 'react';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent'

import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {


  return (

    <>
      <NavBarComponent />
       <ItemListContainerComponent greeting="Bienvenidos a la tienda oficial de KOAN-Argentina"/> 

    </>
  )
}

export default App
