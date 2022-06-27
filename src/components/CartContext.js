import React from 'react'
import { useState,createContext } from 'react'


export const contexto = createContext()
//Provider : Se encarga de establecer el valor del contexto y darle ese valor a todos los otros componentes
const Provider = contexto.Provider

// Provider es un componente que viene adentro de un contexto y sirve para 1. Determinar quienes tienen acceso a la informacion y 2. Determina el valor del contexto.
//useContext : Se encarga de obtener el valor del contexto

export  const MiProvider = ({children}) =>{
    const [carrito, setCarrito]=useState([]);
    const[cantidadTotal, setCantidadTotal] = useState(0) ;
    const [precioTotal,SetPrecioTotal]=useState(0);
    const [Carro,estadoCarro]=useState(0);
    console.log('Soy el carro y tengo la info de la cantidad de productos que hay en el carro de compra ' + Carro)
    
   
    const AgregarProducto = (producto,cantidad) => {
       const copia = [...carrito]
       const nuevo_producto = {
        ...producto,
        cantidad:cantidad
       }
       copia.push(nuevo_producto)
       setCarrito(copia)
    }
    
 
    const valorDelContexto = {
        carrito:carrito,
        cantidadTotal : cantidadTotal,
        precioTotal:precioTotal,
        estadoCarro:estadoCarro,
    }

    
    
    console.log(valorDelContexto)
    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default MiProvider
