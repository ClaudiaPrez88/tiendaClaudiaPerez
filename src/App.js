import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Slider from './components/Slider';
import ContenedorImg from './components/CardProducto';
import {Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import ItemCount from './components/ItemCount';




 // contador = 0
  // const resultado = useState(0)
  // const contador = resultado[0]
  // const CambiarContador = resultado [1]
  //consta + [variable, función] = hook(valor inicial)




const App = () => {
  // const [contador,setContador] = useState(0)
  // const AumentarContador = () => {
  //   setContador(contador + 1)
  // }
  // const BajarContador = () => {
  //   if (contador > 0) { setContador(contador - 1)}
   
  // }
  return <>
    <NavBar/>
    <ItemListContainer gretting='mensaje'/>
     <Slider/>
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
            
                <ContenedorImg texto="img/servilletas/M2201.png"/>
                <ContenedorImg texto="img/servilletas/M2601.png"/>
                <ContenedorImg texto="img/servilletas/M9001.png"/>
                <ContenedorImg texto="img/servilletas/M9901.png"/>
                <ContenedorImg texto="img/servilletas/M9902.png"/>
                <ContenedorImg texto="img/servilletas/M9903.png"/>
            </Row>
        </Container>
  </>
}




export default App;
