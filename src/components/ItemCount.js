import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


// recibe componente hijo funcion del padre
function ItemCount ({stock,initial,onAdd}) {

  const [count, setCount] = useState(initial)
  const aumentarContador = () => {
    if (count < stock){ setCount (count + 1)} }
  const bajarContador = () => {
    if (count > 0){setCount(count - 1)}}
  // const confirmarContador = (e) =>{ 
  //   // // 4.El componente hijo ejecuta la funcion que trajo del padre
  //   onAdd(count)
  // }

  const [isActive, setIsActive] = useState(false);
  const [isOff, setOn] = useState(true);
    const confirmarContador = () => {
      setIsActive(current => !current);
      setOn(current => !current);
      onAdd(count);
    }
    const [isActive2, setIsActive2] = useState(false);
    const confirmarCompra = () =>{
      setIsActive2(current2 => !current2);
    }

  return (<>
            <div className={isActive ? 'hide' : ''}>
              <Button variant="outline-primary" onClick={bajarContador}>-</Button>
                  <span>{count}</span>
                <Button variant="outline-primary" onClick={aumentarContador}>+</Button>
                <Button variant="outline-primary"  onClick={confirmarContador}>Confirmar</Button> 
            </div> 
            <p className={isOff ? 'show' : ''}>Has agregado  <span>{count}</span> servilletas al carrito de compra</p>
            <div className={isActive2 ? 'hide' : ''}>
            <Link to='/cart'><Button variant="primary" onClick={confirmarCompra}>
               Terminar mi compra/Llevame al carrito de compra 
            </Button></Link>
            </div> 
            
         </>
        )}




export default ItemCount;