import React from 'react'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import {contexto} from './CartContext';


export const Car = (e) => {
  const resultado = useContext(contexto)
  console.log('soy el resultado de CarWidgetd' + resultado)
  return (
    <>
    
    <img className="carrito" src={'../img/cart.svg'} alt="carrito"></img>
   
    </>
  )
}

export default Car;
