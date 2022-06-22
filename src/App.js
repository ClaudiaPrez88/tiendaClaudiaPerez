import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Slider from './components/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';




const App = () => {

  return  (<>
  <BrowserRouter>
    <NavBar/>
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