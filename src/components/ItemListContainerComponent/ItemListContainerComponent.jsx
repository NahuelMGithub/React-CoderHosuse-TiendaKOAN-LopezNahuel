/* import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group' */

import React from 'react'

const ItemListContainerComponent = ({ greeting }) => {

    const greetingStyles = {
        fontSize: '2rem',
        margin: 'auto',
        width: '100vw',
        height: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
 
}

return (
    <div style={greetingStyles}>
        {greeting}
    </div>
)
}

export default ItemListContainerComponent
