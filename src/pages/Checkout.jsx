import React from 'react'
import { CartContext } from '../context/CartContext';
import {collection, getFirestore, addDoc} from "firebase/firestore"
import Swal from 'sweetalert2'

const Checkout = () => {
    const [name, setName] = React.useState("");
    const [numberPhone, setNumberPhone] = React.useState("");
    const [direction, setDirection] = React.useState("");


    const { cart } =   React.useContext(CartContext);


    const createOrder =()=>{
        const items = cart.map((item)=>(
       {  id: item.id,
         title:item.title,
         quantity: item.quantity}
       
        ) )
       
       const order = {
         items:items,
         buyer:{
            name,
            numberPhone,
            direction
         }
       };

       if(name!=="" && numberPhone!=="" && direction!==""  ){
       
       const db = getFirestore();
       const ordersCollection = collection(db, "orders");
       addDoc(ordersCollection, order)
       .then(({id})=> {


 
        Swal.fire({
          title: 'Orden lista!',
          text:` Felicitaciones, tu compra con id: ${id} ya esta en proceso.`,
          icon: 'success',
          confirmButtonText: 'Compra lista'
        })
       })
       .catch(err => console.log(err))
       
       } else{
        Swal.fire({
          title: 'Error!',
          text: 'Debes completar todos los campos',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
       }
       } 
    return (
        <div style={{display:"flex", flexDirection:"column", margin:"auto", width:"60%", padding:"20px"}}>
            <input type="text" placeholder='Nombre' onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='Direccion de envio' onChange={(e)=>setDirection(e.target.value)} />
            <input type="text" placeholder='Numero de telefono' onChange={(e)=>setNumberPhone(e.target.value)}/>
             <button style={{width:"150px", margin:"auto", } }onClick={createOrder} > Comprar </button> 
        </div>
    )
}

export default Checkout
