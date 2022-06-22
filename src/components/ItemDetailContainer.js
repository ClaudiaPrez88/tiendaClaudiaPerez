import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById, traerProducto } from '../utils/Productos'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [product, Setproduct] = useState ({})
    const {id} = useParams()

    useEffect (()=> {
        getProductById(parseInt(id))
        .then(response => {Setproduct(response)})
    });

  return (
    <div className='detalle'>
      <ItemDetail {...product}/>
    </div>
  )
}

export default ItemDetailContainer