import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Slider from './components/Slider';
import {Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {

  return <>
    <NavBar/>
    
     <Slider/>
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>

            <ItemListContainer />  
            </Row>
        </Container>
  </>
}




export default App;
