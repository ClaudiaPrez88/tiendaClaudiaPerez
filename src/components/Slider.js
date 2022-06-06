
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = () => {
  return (
    <>
   
     <Carousel  className='slider fondo1'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'img/elemento1.png'}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Servilletas</h5>
          <p>Elige el modelo que más te gusta.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'img/elemento2.png'}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>Servilletas</h5>
          <p>Elige el modelo que más te gusta.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>  
    </>
  )}

export default Slider;