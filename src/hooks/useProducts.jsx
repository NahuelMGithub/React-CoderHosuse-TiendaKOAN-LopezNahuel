import React, { useState } from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore"

export const useProducts = (collectionName) => {

// para FireBase se hace SIEMPRE IGUAL


  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
    React.useEffect(()=>{
       const db = getFirestore() // Primero incializo la base de datos de firebase (la que cree yo)
       const productsCollection = collection(db, collectionName) // Segundo incializo la Coleccion de datos de firebase (la que cree yo)
       // ahora obtengo los datos puntualmente

       getDocs(productsCollection).then((snapshot)=>{
        setItems(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})));
       }).catch((err) => console.log(err)).finally(()=> setLoading(false))


    }, []) 

  return {items, loading}
    
  
}

export default useProducts
