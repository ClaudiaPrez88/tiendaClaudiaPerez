import React from 'react'
import { useState,createContext,useContext  } from 'react'


export const contexto = createContext()
//Provider : Se encarga de establecer el valor del contexto y darle ese valor a todos los otros componentes
const Provider = contexto.Provider

export const useInformation = () =>{
    const cart = useContext(contexto)
    return
}

// Provider es un componente que viene adentro de un contexto y sirve para 1. Determinar quienes tienen acceso a la informacion y 2. Determina el valor del contexto.
//useContext : Se encarga de obtener el valor del contexto

export  const MiProvider = ({children}) =>{
    const [carrito, setCarrito]=useState([1,2,3,4]);
    const[cantidad_total, setCantidadTotal] = useState(0) ;
    const [precio_total, setPrecioTotal]=useState(0);
    const [Carro,estadoCarro]=useState(0);
    
    
    
   
    const agregarProducto = (producto,cantidad) => {
       const copia = [...carrito]
       const nuevo_producto = {
        ...producto,
        cantidad : cantidad
       }
       copia.push(nuevo_producto)
       setCarrito(copia)
    }
    const eliminarProducto = (producto) => {
    
    }
    
    const actualizarCantidad = (producto, cantidad) => {
      
    }

    const vaciarCarrito = () => {}
    
 
    const valorDelContexto = {
        carrito:carrito,
        cantidadTotal : cantidad_total,
        precioTotal:precio_total,
        estadoCarro:estadoCarro,
        agregarProducto : agregarProducto,
    }

    
    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}



