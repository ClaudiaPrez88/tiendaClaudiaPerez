
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from './CarWidgets'


const NavBar = () => {
return (
    <header>
        
        <Navbar className='menu'>
        <Container>
            <Navbar.Brand href="#home">
                <img src={'img/logo.png'} className="logo" alt='logo'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Marca1</Nav.Link>
                <Nav.Link href="#link2">Marca2</Nav.Link>
                <Nav.Link href="#link3">Marca3</Nav.Link>
                <Nav.Link href="#link4">Terminos & condiciones</Nav.Link>
                <Nav.Link>
                    <Car/>
                </Nav.Link>
               
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
    </header>
)
}

export default NavBar;


