import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById} from '../utils/Productos'
import ItemDetail from './ItemDetail'
import {Container,Row,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductLoader from "./ProductLoader";
import { db } from "../config/firebase";
import { getDoc, collection, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})
    const {id} = useParams()
    const [loading, SetLoading] = useState(true)
  console.log( {...product})
 
    useEffect (()=> {
        SetLoading(false);
        const collectionProductos = collection(db,'productos')
        const refeDelDoc = doc(collectionProductos,'1')
        const consulta = getDoc(refeDelDoc)
        consulta.then(resultado=>{
          const producto = resultado.data()
          setProduct(producto)
        })
        .catch((error)=>{
          console.log(error)
          
        })
    }, []);
    
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