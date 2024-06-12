// creamos un contexto de la siguiente manera

import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({children})=>{
    const [cart, setCart] = React.useState([]);


// prevCart se usa por convencion para hablar del elemento previo, es decir lo que habia antes de ejecutar la funcion

    const addToCart = (product, quantity) =>{
        setCart((prevCart) => {
            // veo si el producto existe
            const existingProductIndex = prevCart.findIndex((item) => item.id === product.id)
            if(existingProductIndex >= 0){
                const newCart = [...prevCart]
                newCart[existingProductIndex] = {
                    ...newCart[existingProductIndex],
                    quantity: newCart[existingProductIndex].quantity + quantity
                }
                return newCart
            } else{
                return [...prevCart, {...product, quantity}]
            }
        })
    }

    const decreaseToCart = (product, quantity) =>{
       if (cart >0){
        setCart(cart - 1)
       }
    }
    
    return  <CartContext.Provider value={{cart, addToCart, decreaseToCart}}>{children}  </CartContext.Provider>
    

}




