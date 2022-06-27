import React from 'react'
import { Routes,Route } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'

function Main() {
  return (
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/detail/:id' element={<ItemDetailContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        </Routes>
  )
}

export default Main