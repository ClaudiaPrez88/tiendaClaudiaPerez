
import {Carousel , Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Elemento1 from './img/elemento1.png';

const Slider = () => {
  return (
    <>
   
     <Carousel  className='slider'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Elemento1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Soy Claudia Pérez Velazquez</h5>
          <p>Te invito a conocer mi trabajo como Frontend Developer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Elemento1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Soy Claudia Pérez Velazquez</h5>
          <p>Te invito a conocer mi trabajo como Diseñadora Web.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Elemento1}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h5>Soy Claudia Pérez Velazquez</h5>
          <p>Te invito a conocer mi trabajo como Audiovisualista.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>  
    </>
  )}

export default Slider;