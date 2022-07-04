import NavBar from './components/NavBar';
import './App.css';
import Slider from './components/Slider';
import {Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
import {MiProvider} from './components/CartContext';
import Main from './components/Main';


const App = () => {
  return  (<>
  <BrowserRouter>
    <MiProvider>
        <Container fluid className='menu-nav'>
            <Row>
              <NavBar/>
            </Row>
        </Container>
        <Slider/>
        <Main/>
    </MiProvider>
  </BrowserRouter>
  </>)
}




export default App;