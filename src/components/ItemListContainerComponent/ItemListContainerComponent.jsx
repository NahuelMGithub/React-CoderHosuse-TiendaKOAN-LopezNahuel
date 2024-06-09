/* import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group' */

import React from 'react'
import "./ItemListContainerComponent.css"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemListContainerComponent = ({ products }) => {
 

return (  
    <div className="itemListContainer"> 
    {products.map((product)=>{
    return <Card key={product.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.thumbnail} />
    <Card.Body>
      <Card.Title>{product.tietle}</Card.Title>
      <Card.Text>
      {product.description}
      </Card.Text>
      <Link to={`/item/${product.id}`}> Ver Detalles</Link>
    </Card.Body>
    </Card>}) }
    </div>

) 




}

export default ItemListContainerComponent
