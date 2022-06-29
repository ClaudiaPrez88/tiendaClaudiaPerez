import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import {Card,Container, Col, Row,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { db } from "../config/firebase";
import { contexto } from './CartContext';



const ItemDetail = ({id, name, image, description, stock, price}) => {
const [cant,setCant] = useState(true); 

//DECLARO LA VARIABLE PARA CONSUMIR EL CONTEXTO
const informacionDelContexto = useContext(contexto)
const {agregarProducto} = useContext(contexto)






  // componente padre crea funcion, pasar la información del hijo al padre se llama state uplifting
 const onAdd = (cantidadSeleccionada) =>{
  setCant(cantidadSeleccionada);
  console.log('soy la cantidad seleccionada: ' + cantidadSeleccionada)
  const item = { id, name, image, description, stock}
  agregarProducto(item,cantidadSeleccionada)
  
  


}

 
  const [isActive2, setIsActive2] = useState(false);
    const confirmarCompra = () =>{
      setIsActive2(current2 => !current2);
    }

  return (
    <Container className='contenedor-detalle'>
      <Row>
        <Col xs={12} md={5}>
        <Card.Img variant="top" src={`../${image}`} alt={name} />
        <div key={id} className='detalle' ></div>
        </Col>
        <Col xs={12} md={7}>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <h5>Stock:{stock}</h5>
            <h5>Precio: {price}</h5>
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