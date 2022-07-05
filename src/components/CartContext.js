import React from 'react'
import { useState,createContext  } from 'react'
import CartDetail from './CartDetail'


export const contexto = createContext()
//Provider : Se encarga de establecer el valor del contexto y darle ese valor a todos los otros componentes
const Provider = contexto.Provider


// Provider es un componente que viene adentro de un contexto y sirve para 1. Determinar quienes tienen acceso a la informacion y 2. Determina el valor del contexto.
//useContext : Se encarga de obtener el valor del contexto

export  const MiProvider = ({children}) =>{
    const [carrito, setCarrito]=useState([]);
    const[cantidadTotal, setCantidadTotal] = useState(0) ;
    const [precioTotal, setPrecioTotal]=useState(0);
   
    const agregarProducto = (producto,cantidad) => {
       const copia = [...carrito]
       const nuevoProducto = {...producto,cantidad: cantidad,}
       copia.push(nuevoProducto)
       setCarrito(copia) 
       setCantidadTotal(cantidadTotal+cantidad)
       setPrecioTotal(precioTotal+cantidad*producto.precio)
    };
 
  
   
    // const eliminarProducto = (producto) => {};
    // const actualizarCantidad = (producto, cantidad) => {};
    const vaciarCarrito = (producto) => {};
    
    
    const valorDelContexto = {
        carrito:carrito,
        cantidadTotal : cantidadTotal,
        precioTotal:precioTotal,
        agregarProducto : agregarProducto,
    }

    
    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


