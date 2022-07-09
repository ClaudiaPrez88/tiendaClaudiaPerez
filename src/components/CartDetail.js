import react from "react";
import { useContext } from 'react';
import { contexto } from './CartContext';
import {Button, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react'

function CartDetail() {
    const ctxCartItemDetail = useContext(contexto);
    const {deleteItem, carrito, deleteAll} = useContext(contexto);
    

    const vaciar = () => {
      deleteAll();
    }
    const borrar = () => {
      deleteItem();
    }
   
     const precio = carrito.map((item => item.cantidad*item.price))
     let precioTotal = 0;
      for (let i = 0; i < precio.length; i++) {
        precioTotal += precio[i];
      }


    
    
    
   
  return (
    <>
    <div className="carrito-compras">
      
          {carrito.map((product,i) => {
            return( 
            <div className="producto-carrito">
                <Row>
                <Col xs={2}><img src={product.image}></img></Col>
                <Col xs={3}>
                <p className="">{product.name}</p>
                </Col>
                <Col xs={3}>
                  <p>Cantidad: {product.cantidad}</p>
                </Col>
                <Col xs={2}>
                <p> {`$ ${product.price} USD`}</p>
                </Col>
                <Col  xs={2}>
                <Button  className="" onClick={()=>deleteItem(product.id)}>
                <span>Remover</span>
                </Button>
                </Col>
                </Row>
             
            </div>  
          )})}
          <Row className="justify-content">
          <Col xs={8}></Col>
          <Col xs={2}>  <p>Total: {`$ ${precioTotal} USD`}</p></Col>
          <Col xs={2}>
          <Button  className="" onClick={vaciar}>
              Vaciar carrito
                </Button>
          </Col>
          </Row>
         
       
    </div>
    
    
    </>
  )
}

export default CartDetail