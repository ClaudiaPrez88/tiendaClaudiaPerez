
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {useState} from 'react';


 // contador = 0
  // const resultado = useState(0)
  // const contador = resultado[0]
  // const CambiarContador = resultado [1]
  //consta + [variable, función] = hook(valor inicial)



const ItemCount = () => {


  const [contador,setContador] = useState(1)
  const AumentarContador = () => {
    if (contador < 20){setContador(contador + 1)}
    
  }

  const BajarContador = () => {
    if (contador > 0) { setContador(contador - 1)}
   
  }
  return <>
   
              <p>Cantidad:{contador}</p>
              <Button variant="outline-primary" onClick={AumentarContador}>+</Button>{' '}
              <Button variant="outline-primary" onClick={BajarContador}>-</Button>{' '}
             
              
  </>
}




export default ItemCount;