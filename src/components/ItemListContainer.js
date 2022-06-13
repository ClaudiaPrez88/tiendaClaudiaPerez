import { useEffect, useState } from "react";
import productos from "../utils/Productos";
import 'bootstrap/dist/css/bootstrap.min.css';
import customFetch from "../utils/customFetch";
import ItemList from './ItemList'




function ItemListContainer() {
    const [items, Setitems] = useState ([])
    useEffect (()=> {
        customFetch(2000,productos)
        .then(resultado => Setitems(resultado))
    }, [items]);
   
    return (
        
            <>
             <ItemList productos={items}/>
            </>
       

    )
    

    
}



export default ItemListContainer;


