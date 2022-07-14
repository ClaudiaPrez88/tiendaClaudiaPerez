import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {contexto} from './CartContext';


 const Car = () => {
 
  const {cantidadTotal} = useContext(contexto)
  
  
  return (
    
    <div className='item-carrito'>
    <Link to='/carrito'>
    <img className="carrito" src={'../img/cart.svg'} alt="carrito"></img>
     <h1>{cantidadTotal()}</h1>
    </Link>
    </div>
    
  )
}

export default Car;
