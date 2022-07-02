import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById} from '../utils/Productos'
import ItemDetail from './ItemDetail'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductLoader from "./ProductLoader";
import { db } from "../config/firebase";
import { getDocs, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, Setproduct] = useState ({})
    const {id} = useParams()
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
        <Col xs='12' md={{offset: 2, span: 8, offset: 2 }}>
        {loading?<ProductLoader/>: <ItemDetail className='detalle' {...product}/>}
         
        </Col>
      </Row>
    </Container>
   
  )
}

export default ItemDetailContainer