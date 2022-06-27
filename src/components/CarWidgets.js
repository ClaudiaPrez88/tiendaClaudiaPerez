import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {contexto} from './CartContext';


 const Car = () => {
  const resultado = useContext(contexto)
  setTimeout(() => {
    resultado.setCarrito(['Producto 1'])
  }, 5000);

  return (
    <>
    <Link to='/cart'>Carrito:{resultado.cantidadTotal}
    <img className="carrito" src={'../img/cart.svg'} alt="carrito"></img>
    </Link>
    </>
  )
}

export default Car;
