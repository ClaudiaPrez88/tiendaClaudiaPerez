import { useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList'
import {Container, Row} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import ProductLoader from "./ProductLoader";
import {getDocs, query , where } from 'firebase/firestore';
import { collectionProductos } from "../config/firebase";

function ItemListContainer() {
    // items es nuestro estado / SetItems es la funcion con que modifico el estado
    // usestate es nuestro estado inicial, en este caso un array vacio
    const [items, Setitems] = useState ([])
    const [loading, SetLoading] = useState(true)
    // categoryId = el path que se llamará en las rutas
    const {categoryId} = useParams();
   
 useEffect (()=> { 
    SetLoading(true);
    const filtroDeLaConsulta = categoryId
    ? query(collectionProductos,where('category','==',categoryId))
    : collectionProductos
    
    const consulta = getDocs(filtroDeLaConsulta)
    .then((resultado)=>{
        const productos_mapeados = resultado.docs.map(referencia=>{
            const aux = referencia.data()
            aux.id = referencia.id
            return aux
          })
          Setitems(productos_mapeados)
          SetLoading(false)
    })
    
    .catch((error)=>{
        console.log('error')
    }) 
    }, [categoryId]);

    return (
            <Container className='margen'>
                <Row>
                {loading?<ProductLoader/>:<ItemList productos={items} />}
                </Row>
            </Container> 
    )  
}



export default ItemListContainer;

