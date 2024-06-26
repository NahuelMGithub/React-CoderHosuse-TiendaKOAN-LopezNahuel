import React from 'react'
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'bootstrap';
import './ItemDetailComponent.css';


const ItemDetailComponent = ({product}) => {
 

  return (
    <Figure className='figura'>
    <Figure.Image className='figure-img'
      width={300}
      height={300}
      alt="171x180"
      src={product.thumbnail}
    />
    <Figure.Caption style={{color:"white"}}>
      
    <ListGroup className="list-group-flush">
        <ListGroup.Item> Nombre {product.title}</ListGroup.Item>
        <ListGroup.Item> Descripcion {product.description}</ListGroup.Item>
        <ListGroup.Item> Restantes {product.stock}</ListGroup.Item>
        <ListGroup.Item> Precio {product.discountPercentage}</ListGroup.Item>
      </ListGroup>
      
        <div style={{backgroundColor: "black", padding: "5px"}}>
        <Card.Link href="#" style={{color: "white", margin: "5px"}}>Agregar a favoritos</Card.Link> 
        <Card.Link href="#" style={{color: "white", margin: "5px"}}>Comprar ahora</Card.Link> 
        
        </div>

    </Figure.Caption>
  </Figure>


  )
}

export default ItemDetailComponent

/* after minuto 58 al 64

  
  */


    // importaciones para carrusel



/*
import React from 'react'

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ItemDetailComponent = ({product}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
         {product.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> {product.price}</ListGroup.Item>
        <ListGroup.Item> {product.stock}</ListGroup.Item>
        <ListGroup.Item>{product.discountPercentage}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Agregar a carrito</Card.Link>
        <Card.Link href="#">Agregar a favoritos</Card.Link>
      </Card.Body>
    </Card>


  )
}

export default ItemDetailComponent



*/ 