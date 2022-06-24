import { useEffect, useState } from "react";
import productos from "../utils/Productos";
import 'bootstrap/dist/css/bootstrap.min.css';
import customFetch from "../utils/customFetch";
import ItemList from './ItemList'
import {Container, Row} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../utils/Productos";


function ItemListContainer() {
    const [items, Setitems] = useState ([])
    const {categoryId} = useParams()
    
    useEffect (()=> {
        if(categoryId)
         {getProductByCategory(categoryId)
         .then(response => {Setitems(response)})}
        else 
        {customFetch(2000,productos)
        .then(resultado => Setitems(resultado))
        }  
    }, [items]);
    console.log(items)
   
    return (
            <Container>
                <Row>
                    <ItemList productos={items}/>
                </Row>
            </Container> 
    )  
}



export default ItemListContainer;

