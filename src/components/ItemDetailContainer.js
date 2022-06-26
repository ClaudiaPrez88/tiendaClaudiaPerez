import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById} from '../utils/Productos'
import ItemDetail from './ItemDetail'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductLoader from "./ProductLoader";

const ItemDetailContainer = () => {
    const [product, Setproduct] = useState ({})
    const {id} = useParams()
    const loader = document.getElementById('loader')
    const [loading, SetLoading] = useState(true)

    useEffect (()=> {
        SetLoading(true);
        getProductById(parseInt(id))
        .then(response => {Setproduct(response)
        SetLoading(false)})
    }, []);
  return (
    <Container className='margen' >
      <Row>
        <Col xs='12'>
        {loading?<ProductLoader/>: <ItemDetail className='detalle' {...product}/>}
         
        </Col>
      </Row>
    </Container>
   
  )
}

export default ItemDetailContainer