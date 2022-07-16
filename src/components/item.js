import React, { useEffect } from 'react'
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {db} from '../config/firebase'
import {getDocs, collection } from 'firebase/firestore';


 function Item({id, name, image, price, stock}) {
  useEffect (()=> { 
    const collectionProductos = collection(db, 'productos')
    const consulta = getDocs(collectionProductos)
    
    
    .then((resultado)=>{
        const productos_mapeados = resultado.docs.map(referencia=>{
            const aux = referencia.data()
            aux.id = referencia.id
            return aux
            
          })
    
    })
    
    .catch((error)=>{
        console.log('error')
    })
       
    }, []);

  return (
   <Col xs={12} md={3}>
        <div key={id} className='detalle' >
        <p>{name}</p>
        <img className='item-image' src={`${image}`} alt={name} ></img>
        <Link className='boton-detail' to={`/detail/${id}`}>Ver detalle</Link>
        </div>
  </Col> 
  )
};

export default Item