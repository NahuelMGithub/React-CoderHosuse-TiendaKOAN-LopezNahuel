import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/CartContext";


const CartWidgetComponent = () => {
  const { cart } = React.useContext(CartContext);
  const customStyles = {
    color: "white",
    fontSize: "1.3rem",
    marginRight: "0.5rem",
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <FontAwesomeIcon icon={faCartPlus} style={customStyles} />
        <span style={customStyles}>{totalItems}</span>
      </Link>
    </div>
  );
};

export default CartWidgetComponent;


/* import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext' // importo el contexto donde se guarda el cantProducos




const CartWodgetComponent = () => {
  const customeStyle = {color:"white", fontSize: '1.5rem'}

  const {cart} = React.useContext(CartContext)

  const totalItems = cart.reduce(( total, item) => total + item.quantity, 0)
  return (
    <div>
      <Link to="/cart" style={{ textDecoration: "none" }}>
        <FontAwesomeIcon icon={faCartPlus} style={customStyles} />
        <span style={customStyles}>{totalItems}</span>
      </Link>
    </div>
  )
}

export default CartWodgetComponent */
