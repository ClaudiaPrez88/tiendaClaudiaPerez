
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
        <Link to='detail/1' > Categoria 1 </Link>
        <Link to='detail/2' > Categoria 2 </Link>
        <Link to='detail/3' >Categoria 3</Link>
        <Nav.Link><Car/></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
        
    </header>
)
}

export default NavBar;

