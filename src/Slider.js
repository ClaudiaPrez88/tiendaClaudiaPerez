import fondo1 from './img/fondo1.png'
import fondo2 from './img/fondo2.png'
const Slider = () => {
  return (
    <>
        <div className="sliderinicial">
  
            <ul className="slider">
                <li id="slide1">
                <img src={fondo1} alt="fondo1" />
                </li>
                <li id="slide2">
                <img src={fondo2} alt="fondo2" />

                </li>
            
            </ul>
            
            <ul className="menu2">
                <li>
                <a href="#slide1">1</a>
                </li>
                <li>
                <a href="#slide2">2</a>
                </li>
                
            </ul>
  
        </div>
    </>
  )
}

export default Slider