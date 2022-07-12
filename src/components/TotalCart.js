import React , { useContext, useState} from 'react'
import {Button, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { contexto } from './CartContext';

function TotalCart() {
    const { carrito, deleteAll} = useContext(contexto);
    

    const vaciar = () => {
        deleteAll();
      }
      const precio = carrito.map((item => item.cantidad*item.price))
      let precioTotal = 0;
       for (let i = 0; i < precio.length; i++) {
         precioTotal += precio[i];
       }
  
  return (
    <>
        <Col xs={{span: 2, offset: 8}}>  <p>Total: {`$ ${precioTotal} USD`}</p></Col>
        <Col xs={2}> <Button onClick={vaciar}>Vaciar carrito</Button></Col>
    </>
  )
}

export default TotalCart