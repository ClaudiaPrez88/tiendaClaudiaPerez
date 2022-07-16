import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductLoader from "./ProductLoader";
import { collectionProductos } from "../config/firebase";
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})
    const {id} = useParams()
    const [loading, SetLoading] = useState(true)
  
 
    useEffect (()=> {
        const refeDelDoc = doc(collectionProductos,id)
        const consulta = getDoc(refeDelDoc)
        consulta.then(resultado=>{
          setProduct({
            id: resultado.id,
            ...resultado.data()
          })
          SetLoading(false);
        })
        .catch((error)=>{
          console.log(error)})
    }, [id]);
    
  return (
    <Container className='margen' >
      <Row>
        <Col xs='12' md={{offset: 2, span: 8, offset: 2 }}>
        {loading?<ProductLoader/>: 
        <ItemDetail className='detalle' {...product}/>}
         
        </Col>
      </Row>
    </Container>
   
  )
}

export default ItemDetailContainer