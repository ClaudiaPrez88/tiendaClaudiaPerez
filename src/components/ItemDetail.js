import React from 'react'
import ItemCount from './ItemCount'
import {Card, Button, Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemDetail = ({id, name, image, description, stock}) => {

  // componente padre crea funcion, pasar la información del hijo al padre se llama state uplifting
  const onAdd = (cantidadSeleccionada) =>{
    console.log('desde ItemDetail:' + cantidadSeleccionada)
    // lo almaceno en un estado interno de ItemDetail
  }
  return (
    <>
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
            {/* componente padre pasa funcion al hijo como prop */}
        <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
        <br></br>
            <Button variant="primary"> Terminar mi compra</Button>
          </Card.Body>
        </Col>
       
      </Row>
    </Container>
      

    </>
  )
}

export default ItemDetail