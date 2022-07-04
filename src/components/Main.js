import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import Cart from './Cart'
import Checkout from './checkout'

function Main() {
  return (
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/carrito' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
  )
}

export default Main