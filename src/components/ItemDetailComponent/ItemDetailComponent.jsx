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

/* after minuto 58 al 64
<Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
  */


    // importaciones para carrusel

   // import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';