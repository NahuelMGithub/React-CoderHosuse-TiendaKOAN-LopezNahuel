import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CartContext' // importo el contexto donde se guarda el cantProducos




const CartWodgetComponent = () => {
  const customeStyle = {color:"white", fontSize: '1.5rem'}

  const {cart} = React.useContext(CartContext)

  const totalItems = cart.reduce(( total, item) => total + item.quantity, 0)
  return (
    <div>
 <FontAwesomeIcon icon={faCartPlus} style={customeStyle} />
 <span  style={customeStyle}> {totalItems} </span>
    </div>
  )
}

export default CartWodgetComponent
