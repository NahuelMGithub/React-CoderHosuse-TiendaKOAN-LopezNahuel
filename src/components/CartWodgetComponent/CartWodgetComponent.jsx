import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'




const CartWodgetComponent = () => {
  const customeStyle = {color:"white", fontSize: '1.5rem'}
  return (
    <div>
 <FontAwesomeIcon icon={faCartPlus} style={customeStyle} />
 <span  style={customeStyle}> 0 </span>
    </div>
  )
}

export default CartWodgetComponent
