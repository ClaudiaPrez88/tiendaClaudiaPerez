import React from 'react'
import ItemCount from './ItemCount'
import {Card,Container, Col, Row,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({id, name, image, description, stock}) => {
  const [cant,setCant] = useState(0);
 
  const [isActive2, setIsActive2] = useState(false);
    const confirmarCompra = () =>{
      setIsActive2(current2 => !current2);
    }


  // componente padre crea funcion, pasar la información del hijo al padre se llama state uplifting
 const onAdd = (cantidadSeleccionada) =>{
    setCant(cantidadSeleccionada);
    const cantidad = [cantidadSeleccionada];
    // lo almaceno en un estado interno de ItemDetail
  }
  


  return (
    <Container className='contenedor-detalle'>
      <Row>
        <Col xs={12} md={6}>
        <Card.Img variant="top" src={`../${image}`} alt={name} />
        <div key={id} className='detalle' ></div>
        </Col>
        <Col xs={12} md={6}>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <h2>Stock:{stock}</h2>
            <p></p>
            {/* componente padre pasa funcion al hijo como prop */}
            <ItemCount stock={stock} initial={0} onAdd={onAdd}/>

            <div className={isActive2 ? 'hide' : ''}>
              <Link to='/cart'>
                <Button variant="primary" onClick={confirmarCompra}>
                Terminar mi compra/Llevame al carrito de compra
                </Button>
              </Link>
            </div>  
          </Card.Body>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail