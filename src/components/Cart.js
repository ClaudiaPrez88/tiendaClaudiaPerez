import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { contexto } from './CartContext';
import { useState } from 'react';
import CartDetail from './CartDetail';
import { db } from "../config/firebase";
import { collection, addDoc,serverTimestamp } from "firebase/firestore";
import Formulario from './Formulario';



function Cart() {
    const {carrito,precioTotal} = useContext(contexto)
    const [data, setData] = useState({ name: '', email: '', phone: '' });
    const [orderId, setOrderId] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      const objOrden = {
          buyer: {
              name: data.name,
              phone: data.phone,
              email: data.email,
          },
          items : [{id:1,titulo:"Compra Servilletas"}],
          carrito,
          precioTotal: precioTotal(),
          date: serverTimestamp(),
      };

      const ref = collection(db, 'orders');
      addDoc(ref, objOrden).then((response) => {
          setOrderId(response.id);
      });
  };
  if (orderId !== '') {
      return  <Container id="checkout">
      <Row>
          <Col xs={12}>
         <h4 className='anuncio'>Gracias por tu compra, tu número de envío es: {orderId}</h4>
          </Col>
      </Row>
  </Container>;
  }

  return (
    <>
    <Container id=''>
        <Row>
         <Col md={12}><CartDetail/></Col>
          <Col md={{ span: 6, offset: 3 }}>
            <p>
            Escribe tus datos en el formulario y haz click en el botón "finalizar compra" para enviarnos tu pedido. Luego de esto, te enviaremos un email con los datos de transferencia y fecha de entrega de tu compra. 
            </p>
            <Formulario
                        handleChange={handleChange}
                        data={data}
                        handleSubmit={handleSubmit}
                    />
            
          
          </Col>
        </Row>
    </Container>
        
    </>
  )
}

export default Cart