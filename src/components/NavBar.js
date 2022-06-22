
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
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
        <Link to='/category1' > Categoria 1 </Link>
        <Link to='/category2' > Categoria 2 </Link>
        <Link to='/category3' >Categoria 3</Link>
        <Nav.Link><Car/></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
        
    </header>
)
}

export default NavBar;

