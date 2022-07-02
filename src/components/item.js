import React, { useEffect } from 'react'
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';


 function Item({id, name, image, price, stock}) {


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