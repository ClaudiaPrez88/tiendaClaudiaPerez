
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Slider'
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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
        <Slider/>
    </header>
)
}

export default NavBar;


