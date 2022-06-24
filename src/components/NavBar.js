
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from './CarWidgets';
import { Link } from 'react-router-dom';


const NavBar = () => {
return (
    <header>
        <Navbar className='menu' expand="lg" >
  <Container>
    <Navbar.Brand>
      <Link to='/'>
        <img src={'img/logo.png'} className="logo" alt='logo'/>
        </Link>
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto ">
        <Link to='category/Campo' >Campo </Link>
        <Link to='category/Flores' >Flores </Link>
        <Link to='category/Animales' >Animales</Link>
        <Nav.Link><Car/></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
        
    </header>
)
}

export default NavBar;

