/*
escribo rafce y lo hace solo gracias a la exension ES7+React....
 */


// Las Props: son propiedades que el componente hereda de su padre
// Para recibir la propiedad (que puse en App.jsx)
/*
1. Colocando el argumento props en la función del compoenten

2. Desestructurando el objeto props


const ButtonComponent = (props) => {
  return (
    <button>
    {props.label}
    </button>
  )
}

export default ButtonComponent
*/
import React from 'react'

//----- Otra opcion si es que deseo desestructurar:

const ButtonComponent = ({label ="Label por defecto", description, functionAdd}) => {
  return (
    <div>
      <button onClick={functionAdd} title={description}>
        {label}
      </button>
    </div>
  )
}

export default ButtonComponent
 
