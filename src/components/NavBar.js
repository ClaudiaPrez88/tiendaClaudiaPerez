
import {Navbar, Nav, Container,Col} from 'react-bootstrap';
import Car from './CarWidgets';
import { Link } from 'react-router-dom';




const NavBar = () => {
return (
      <Col xs={12}>
        <Navbar bg="light" expand="lg" className='menu'>
          <Container>
            <Navbar.Brand href="#home">
            <Link to='/'>
            <img src='../img/logo.png' className='logo' alt='logo'></img>
            </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" >
                <Link to='category/Campo' >Campo </Link>
                <Link to='category/Flores' >Flores </Link>
                <Link to='category/Animales' >Animales</Link>
                <Link to='carrito'><Car/></Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
      </Col>  
)
}

export default NavBar;

