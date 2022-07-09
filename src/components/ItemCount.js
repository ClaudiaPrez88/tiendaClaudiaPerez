import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState ,  useContext} from 'react';
import {contexto} from './CartContext';



// recibe componente hijo funcion del padre
function ItemCount ({stock,initial,onAdd}) {
let contextoEnItemCount = useContext(contexto)
const {carrito} = useContext(contexto)


  // Este será el valorTotal que me llega desde CarWidget
  
  
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
            <p className={isOff ? 'show' : ''}>Agregado exitosamente al carrito</p>
            
         </>
        )}




export default ItemCount;