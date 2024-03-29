import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import {Card,Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
// import { db } from "../config/firebase";
import { contexto } from './CartContext';



const ItemDetail = ({id, name, image, description, stock, price}) => {
const [cant,setCant] = useState(true); 
const {agregarProducto} = useContext(contexto)



  // componente padre crea funcion, pasar la información del hijo al padre se llama state uplifting
 const onAdd = (cantidadSeleccionada) =>{
  setCant(cantidadSeleccionada);
  const item = { id, name, image, description, stock, price}
  agregarProducto(item,cantidadSeleccionada)
}


  return (
    <Container className='contenedor-detalle'>
      <Row>
        <Col xs={12} md={5}>
        <Card.Img variant="top" src={`${image}`} alt={name} />
        <div key={id} className='detalle' ></div>
        </Col>
        <Col xs={12} md={7}>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description} </Card.Text>
            <h5>Stock:{stock}</h5>
            <h5>Precio: {price} USD</h5>
            <ItemCount stock={stock} initial={0} onAdd={onAdd}/>
            
          </Card.Body>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail