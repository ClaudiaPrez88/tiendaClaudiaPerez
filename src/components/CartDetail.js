import { useContext} from "react";
import { contexto } from './CartContext';
import {Button, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TotalCart from "./TotalCart";

import React from 'react'

function CartDetail() {
    const {deleteItem, carrito} = useContext(contexto);

   
  return (
    <>
    {carrito.length === 0 ?
    (<Row>
        <Col xs={12} >
          <div className="carrito-vacio">
          <p className="text-center">Tu carrito esta vacio, agrega algún producto para hacernos feliz</p>
          <a className="boton-detail" href="/">Ir al catálogo</a>
          </div>
        </Col>
      </Row>) :
   (<>
   <div className="carrito-compras">
      {carrito.map((product,i) => {
        return( 
        <div className="producto-carrito">
            <Row>
            <Col xs={12} md={2}><img alt="producto" src={product.image}></img></Col>
            <Col  xs={12} md={3}>
            <p className="">{`Nombre: ${product.name}`}</p>
            </Col>
            <Col xs={6} md={3}>
              <p>Cantidad: {product.cantidad}</p>
            </Col>
            <Col xs={6} md={2}>
            <p> {`Precio c/u: $ ${product.price} USD`}</p>
            </Col>
            <Col xs={12} md={2}>
            <Button  className="" onClick={()=>deleteItem(product.id)}>
            <span>Remover</span>
            </Button>
            </Col>
            </Row>
        </div>  
      )})}   
      <Row>
        <TotalCart/>
      </Row>        
        
    </div>
    </>)
    }
    </>
        )
}

export default CartDetail