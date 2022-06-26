import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Slider from './components/Slider';
import {Container,Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from './components/Logo';




const App = () => {

  return  (<>
  <BrowserRouter>
    <Container fluid className='menu-nav'>
      <Row>
        <Logo/>
        <NavBar/>
      </Row>
    </Container>
   

    <Slider/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/detail/:id' element={<ItemDetailContainer/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      </Routes>
  </BrowserRouter>
  </>)
}




export default App;