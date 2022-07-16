import React , { useContext} from 'react'
import {Button, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { contexto } from './CartContext';

function TotalCart() {
    const {deleteAll,precioTotal,cantidadTotal} = useContext(contexto);
    
    const vaciar = () => {
        deleteAll();
      }

  return (
    <>
        <Col xs={6} md={{span: 3, offset: 5}}>Total paquetes:{cantidadTotal()}</Col>
        <Col xs={6} md={2}>Precio total: $ {precioTotal()}</Col>
        <Col xs={12} md={2}> <Button onClick={vaciar}>Vaciar carrito</Button></Col>
    </>
  )
}

export default TotalCart