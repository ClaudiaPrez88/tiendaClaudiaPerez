import { useEffect, useState } from "react";
import productos from "../utils/Productos";
import 'bootstrap/dist/css/bootstrap.min.css';
import customFetch from "../utils/customFetch";
import ItemList from './ItemList'
import {Container, Row} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../utils/Productos";
import ProductLoader from "./ProductLoader";



function ItemListContainer() {
    // items es nuestro estado / SetItems es la funcion con que modifico el estado
    // usestate es nuestro estado inicial, en este caso un array vacio
    const [items, Setitems] = useState ([])
    const [loading, SetLoading] = useState(true)

    

    // categoryId = el path que se llamará en las rutas
    const {categoryId} = useParams();
   
 useEffect (()=> {
    SetLoading(true);
    
        if(!categoryId)
         {customFetch(2000,productos)
            .then(resultado => {
            Setitems(resultado)
            SetLoading(false)
        })}
        else 
        {getProductByCategory(categoryId)
            .then(response => {
                Setitems(response)
                SetLoading(false)}) 
        }  
        //Runs on every render vs
        // useEffect(() => {
        //     //Runs only on the first render
        //   }, []);
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

