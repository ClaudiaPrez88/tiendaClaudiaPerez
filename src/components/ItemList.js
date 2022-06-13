import React from 'react'
import Item from './item'


function ItemList({productos}) {
  
  return(
    productos.map(p=> <Item id={p.id}   name={p.name} image={p.image} description={p.description} stock={p.stock} />)
    )
    
    
}

export default ItemList