
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider';
import Logo from './img/logo.png';


const NavBar = () => {
return (
    <header className='fondo1'>
        
        <Navbar >
        <Container>
            <Navbar.Brand href="#home">
                <img src={Logo} className="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
                <Nav.Link href="#home">Inicio</Nav.Link>
                <Nav.Link href="#link">Diseño</Nav.Link>
                <Nav.Link href="#link2">Videos</Nav.Link>
                <Nav.Link href="#link3">Desarollo</Nav.Link>
                <Nav.Link href="#link4">Tienda Audiovisual</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
        <Slider/>
    </header>
)
}

export default NavBar;


