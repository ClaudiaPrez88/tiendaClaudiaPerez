import { useEffect, useState } from "react";
import productos from "../utils/Productos";
import 'bootstrap/dist/css/bootstrap.min.css';
import customFetch from "../utils/customFetch";
import ItemList from './ItemList'
import {Container, Row} from 'react-bootstrap';





function ItemListContainer() {
    const [items, Setitems] = useState ([])
    useEffect (()=> {
        customFetch(2000,productos)
        .then(resultado => Setitems(resultado))
    }, [items]);
   
    return (
        
            <>
            <Container>
                <Row>
                    <ItemList productos={items}/>
                </Row>
            </Container>
             
            </>
       

    )
    

    
}



export default ItemListContainer;

