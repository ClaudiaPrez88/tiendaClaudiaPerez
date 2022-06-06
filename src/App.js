import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Slider from './components/Slider';
import ContenedorImg from './components/CardProducto';
import {Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  return <>
    <NavBar/>
    <ItemListContainer gretting='mensaje'/>
     <Slider/>
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <ContenedorImg texto="img/elemento1.png"/>
                <ContenedorImg texto="img/elemento1.png"/>
                <ContenedorImg texto="img/elemento2.png"/>
                <ContenedorImg texto="img/elemento1.png"/>
            </Row>
        </Container>
   
  </>
}




export default App;
