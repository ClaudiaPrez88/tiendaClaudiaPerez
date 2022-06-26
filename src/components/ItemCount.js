import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


// recibe componente hijo funcion del padre
function ItemCount ({stock,initial,onAdd}) {

  const [count, setCount] = useState(initial)
  const aumentarContador = () => {
    if (count < stock){ setCount (count + 1)} }
  const bajarContador = () => {
    if (count > 0){setCount(count - 1)}}
  const confirmarContador = (e) =>{ 
    // 4.El componente hijo ejecuta la funcion que trajo del padre
    onAdd(count)
  }
  return <>
              <Button variant="outline-primary" onClick={bajarContador}>-</Button>
              <span>{count}</span>
              <Button variant="outline-primary" onClick={aumentarContador}>+</Button>
              <Button variant="outline-primary" onClick={confirmarContador} >Confirmar</Button>         
        </>
}




export default ItemCount;