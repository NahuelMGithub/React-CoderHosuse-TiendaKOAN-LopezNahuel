import React from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore';


export const useProductById = (id) => {

    const [product, setProduct] = React.useState({});
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
      
        const db = getFirestore()
        const producRef = doc(db, "products", id)

        getDoc(producRef).then((snapshot)=>{
            setProduct({id: snapshot.id, ...snapshot.data()} )
        }).catch(()=>setError(true)).finally(()=> setLoading(flase))

    }, [id]);
    return {product}

}