import React from 'react'
import { useState,createContext } from 'react'


export const contexto = createContext()
//Provider : Se encarga de establecer el valor del contexto y darle ese valor a todos los otros componentes
const Provider = contexto.Provider
// Provider es un componente que viene adentro de un contexto y sirve para 1. Determinar quienes tienen acceso a la informacion y 2. Determina el valor del contexto.
//useContext : Se encarga de obtener el valor del contexto

export  const MiProvider = ({children}) =>{
   
 
    const valorDelContexto = {
        carrito : [],
        cantidadTotal : 10,
        precio_total: 10,
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default MiProvider
