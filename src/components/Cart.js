import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { contexto } from './CartContext';
import { useState } from 'react';
import CartDetail from './CartDetail';


function Cart() {
    const {carrito} = useContext(contexto)

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

    const handleClick = (e) => {
        e.preventDefault()
      }
    
      const handleNombreChange = (e) => {
        setNombre(e.target.value)
      }
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value)
      }
    
      const handleTelChange = (e) => {
        setTel(e.target.value)
      }
  return (
    <>
    <Container id=''>
        <Row className="justify-content-md-center">
         <Col md={12}><CartDetail/></Col>
          <Col xs={12}>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <form onSubmit={handleSubmit}>
                <div><input onChange={handleNombreChange} type='text' id='nombre' placeholder='Nombre...' value={nombre}/></div>
               <div><input onChange={handleEmailChange} type='email' id='email' placeholder='Email...'/></div> 
               <div><input onChange={handleTelChange} type='number' id='telefono place
                Tel...' placeholder='Teléfono'/></div>
                <button>Comprar</button>
            </form>
            
            <Link className='proceder-compra' to='/checkout' >Proceder a la compra</Link>
          </Col>
        </Row>
    </Container>
        
    </>
  )
}

export default Cart