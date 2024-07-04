import React from "react";

import { CartContext } from "../context/CartContext";

import { Link } from "react-router-dom";



const Cart = () => {
  const { cart, removeFromCart, deleteFromCart } =
    React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  const [totalAPagar, setTotalAPagar] = React.useState(0);

  React.useEffect(() => {
    // Calcula el total sumando los precios multiplicados por la cantidad de cada producto
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalAPagar(total);
}, [cart]); // Se ejecuta cada vez que cambia el carrito


  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div style={{ display: "flex", flexDirection:"column" }}>
          <div style={{ flex: 1, padding: "10px" }}>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  margin: "10px",
                  border: "1px solid gray",
                  padding: "10px",
                }}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>Precio unitario: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => handleRemoveOne(item)}>-</button>
                <button onClick={() => handleDeleteItem(item)}>Eliminar</button>
                
              </div>
            ))}
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {cart.map((item, index) => (
                 
              <div
                key={index}
                style={{ margin: "10px", padding: "10px", textAlign: "right" }}
              >
                <p>Total en juego: {item.title} = ${item.price * item.quantity}</p>
             
              </div>

            ))}
            <div>
              Total a Pagar: {totalAPagar}
              </div>
          </div>
        <Link style={{width:"150px", margin:"auto"}} to={'/checkout'}> <button> Realizar compra </button>  </Link> 
        </div>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;