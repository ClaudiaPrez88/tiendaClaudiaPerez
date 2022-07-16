import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react';
import { Link } from 'react-router-dom';



// recibe componente hijo funcion del padre
function ItemCount ({stock,initial,onAdd}) {

const [isActive2, setIsActive2] = useState(false);
    const confirmarCompra = () =>{
      setIsActive2(current2 => !current2);
    }
const [count, setCount] = useState(initial)
const aumentarContador = () => {
   if (count < stock){ setCount (count + 1)} }
  const bajarContador = () => {
    if (count > 0){setCount(count - 1)}}
 
const [isActive, setIsActive] = useState(false);
const [isOff, setOn] = useState(true);
  const confirmarContador = () => {
      if (count > 0 )  {
        setIsActive(current => !current);
      setOn(current => !current);
      onAdd(count);
      }
      
    }
   
    
    
  return (<>
            <div className={isActive ? 'hide' : ''}>
              <Button variant="outline-primary" onClick={bajarContador}>-</Button>
                  <span>{count}</span>
                <Button variant="outline-primary" onClick={aumentarContador}>+</Button>
                <Button variant="outline-primary"  onClick={confirmarContador}>Confirmar</Button> 
            </div> 
            <p className={isOff ? 'hide' : ''}>Producto agregado exitosamente</p>
            <div className={isOff ? 'hide' : ''}>
              <Link to='/carrito'>
                <Button variant="primary" onClick={confirmarCompra}>
                Terminar mi compra <img class="carrito" src="../img/cart.svg" alt="carrito"></img>
                </Button>
              </Link>
            </div>  
            
         </>
        )}




export default ItemCount;