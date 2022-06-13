import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



function ItemCount ({stock}) {
  const [count, setCount] = useState(0)
  function adding (){
    if (count < stock) {
      setCount(count + 1)
    }
  }
  function subs(){
    if (count > 0){
      setCount( count - 1)
    }
  }

  return <>
   
              <Button variant="outline-primary" onClick={subs}>-</Button>
              <span>{count}</span>
              <Button variant="outline-primary" onClick={adding}>+</Button>
             
              
  </>
}




export default ItemCount;