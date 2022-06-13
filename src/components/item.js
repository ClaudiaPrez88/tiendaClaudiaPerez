import React from 'react'
import {Col} from 'react-bootstrap';
import ItemCount from './ItemCount';

 function Item({id, name, image, description, stock}) {
  return (
    <Col xs={4}>
        <div key={id}>
        <p>{name}</p>
        <img src={image} alt={name} ></img>
        <p>{description}</p>
        <ItemCount  stock={stock}  />
        </div>
    </Col>
  )
};

export default Item