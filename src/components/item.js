import React from 'react'
import {Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

 function Item({id, name, image, description, stock}) {
  return (
   <Col xs={12} md={4}>
        <div key={id} className='detalle' >
        <p>{name}</p>
        <img src={`../${image}`} alt={name} ></img>
        <p>{description}</p>
        <Link to={`/detail/${id}`}>Ver detalle</Link>
        </div>
  </Col> 
  )
};

export default Item