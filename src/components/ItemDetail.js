import React from 'react'
import ItemCount from './ItemCount'
import {Card, Button, Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({producto}) => {
  return (
    <>
    <Container className='contenedor-detalle'>
      <Row>
        
        <Col xs={12} md={6}>
        <Card.Img variant="top" src={producto.image} alt={producto.name} />
        </Col>
        <Col xs={12} md={6}>
        <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Text>
            {producto.description}
            </Card.Text>
            <h2>Stock:{producto.stock}</h2>
        <ItemCount stock={producto.stock}/>
        <br></br>
            <Button variant="primary"> Agregar al carro</Button>
          </Card.Body>
        </Col>
       
      </Row>
    </Container>
      

    </>
  )
}

export default ItemDetail