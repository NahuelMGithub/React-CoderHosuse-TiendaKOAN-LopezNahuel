import React from 'react'
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore"


export const useProductsByCategory = (category) => {
    const [products, setProducts] = React.useState([]);

    React.useEffect(()=>{
const db = getFirestore();
const prodcutsCollection = collection(db, "products");
const productsQuery = query(prodcutsCollection, where("category", "==", category))

getDocs(productsQuery)
.then((snapshot) =>{
    setProducts(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
})
.catch((err) =>console.log(err))


    }, [category]);
    return {products}
}


