import React from 'react'
import { Link } from 'react-router-dom';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import CartWodgetComponent from '../CartWodgetComponent/CartWodgetComponent';
import { getAllCategory } from '../../services/products';
import {useProducts} from "../../hooks/useProducts"

const NavBarComponent = () => {

  const {items} = useProducts("category")

/* Esto era para traer desde la api. Tener en cuenta que en la api usa           <NavDropdown.Item key={category.... (otra cosa)}> 

const [categories, setCategories] = React.useState([])

  React.useEffect(()=>{
    getAllCategory()
    .then(res => setCategories(res.data))
    .catch(err => console.log(err))
  }) */

  return (
    <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand> <Link to='/' style={{color:"white"}}>  KOAN - Juegos de Mesa</Link>   </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link > <Link to='/'> Home</Link>  </Nav.Link>
         
          <NavDropdown title="Categorias" id="basic-nav-dropdown">

          {items.map((category)=>{
            return (
               <NavDropdown.Item key={category.id}>
                  <Link to={`category/${category.slug}`}> {category.name} </Link>
               </NavDropdown.Item>
            )
          })}  

          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    <CartWodgetComponent/>
    </Container>
   
  </Navbar>
  )
}

export default NavBarComponent
