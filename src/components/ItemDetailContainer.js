import React from 'react'
import { useState,useEffect } from 'react'
import { traerProducto } from '../utils/Productos'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [producto, Setproducto] = useState ({})
    useEffect (()=> {
        traerProducto()
        .then(resultado => 
          Setproducto(resultado))
    });

  return (
    <div className='detalle'>
      <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer