import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Slider from './components/Slider';
import {Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';




const App = () => {

  return <>
    <NavBar/>
    
     <Slider/>
        <Container>
            <Row>
            <ItemListContainer/>  
           <ItemDetailContainer/>
            </Row>
        </Container>
  </>
}




export default App;
