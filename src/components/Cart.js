import React, { useEffect } from 'react'
import {Container,Row,Col, Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from './CartContext';
import { useState,useRef} from 'react';
import CartDetail from './CartDetail';


function Cart() {
    const {carrito} = useContext(contexto)
    const {vacio,setVacio} = useState()
   
 
    const [nombre,setNombre] = useState("")
    const [tel,setTel] = useState("")
    const [email,setEmail] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.dir(e.target.elements.nombre.value)
        // const nombre = e.target.elements.nombre.value
        // const tel = e.target.elements.telefono.value
        // const email = e.target.elements.email.value
        // const usuario = {nombre, tel, email}
        // console.log(usuario)
    }

    const handleClick = (e) => { e.preventDefault()}
    
    const handleNombreChange = (e) => { setNombre(e.target.value)}
  
    const handleEmailChange = (e) => {  setEmail(e.target.value) }
  
    const handleTelChange = (e) => { setTel(e.target.value)}

  return (
    <>
    <Container>
        <Row>
          <Col md={12}><CartDetail/>
          </Col>
          <Col xs={12} md={{ span: 6,offset: 3  }}>
            <form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control onChange={handleNombreChange} type='text' id='nombre' placeholder='Nombre...' value={nombre} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={handleEmailChange} type='email' id='email' placeholder='Email...' />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTel">
              <Form.Label>Teléfono</Form.Label>
                <Form.Control onChange={handleTelChange} type='number' id='telefono place
                Tel...' placeholder='Teléfono' />
              </Form.Group>
              <Link className='proceder-compra' to='/checkout' >Proceder a la compra</Link>
            </form>
            {/* <form onSubmit={handleSubmit}>
                <div><input onChange={handleNombreChange} type='text' id='nombre' placeholder='Nombre...' value={nombre}/></div>
               <div><input onChange={handleEmailChange} type='email' id='email' placeholder='Email...'/></div> 
               <div><input onChange={handleTelChange} type='number' id='telefono place
                Tel...' placeholder='Teléfono'/></div>
                <button>Comprar</button>
            </form> 
            <Link className='proceder-compra' to='/checkout' >Proceder a la compra</Link>*/}
            
            
          </Col>
        </Row>
    </Container>
        
    </>
  )
}

export default Cart