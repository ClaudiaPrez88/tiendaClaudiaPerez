import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList'
import {Container, Row} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../utils/Productos";
import ProductLoader from "./ProductLoader";
import {db} from '../config/firebase'
import {getDocs, collection , query , where } from 'firebase/firestore';

function ItemListContainer() {
    // items es nuestro estado / SetItems es la funcion con que modifico el estado
    // usestate es nuestro estado inicial, en este caso un array vacio
    const [items, Setitems] = useState ([])
    const [loading, SetLoading] = useState(true)
    // categoryId = el path que se llamará en las rutas
    const {categoryId} = useParams();
   
 useEffect (()=> { 
    const collectionProductos = collection(db, 'productos')
    const filtroDeLaConsulta = query(collectionProductos,where('category','==','Flores'))
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
    // SetLoading(true);
    
    //     if(!categoryId)
    //      {customFetch(2000,productos)
    //         .then(resultado => {
    //         Setitems(resultado)
    //         SetLoading(false)
    //     })}
    //     else 
    //     {getProductByCategory(categoryId)
    //         .then(response => {
    //             Setitems(response)
    //             SetLoading(false)}) 
    //     }  
       
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

