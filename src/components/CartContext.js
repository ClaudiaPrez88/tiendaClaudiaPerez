import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'



export const contexto = createContext()
//Provider : Se encarga de establecer el valor del contexto y darle ese valor a todos los otros componentes
const Provider = contexto.Provider
// Provider es un componente que viene adentro de un contexto y sirve para 1. Determinar quienes tienen acceso a la informacion y 2. Determina el valor del contexto.
//useContext : Se encarga de obtener el valor del contexto

export  const MiProvider = ({children}) =>{
    const [carrito, setCarrito]=useState([])
    const[cantidadTotal, setcantidadTotal] = useState(0)
    const [precio_total, setPrecioTotal]=useState(0)

    const agregarProducto = (producto,cantidad) => {
        const copia = [...carrito]
        const nuevo_producto = {
            ...producto,
            cantidad:cantidad
        }
        copia.push(nuevo_producto)
        setCarrito(copia)
    }

    const eliminarProducto = (producto) =>{

    }

    const actualizarCantidad = (producto, cantidad) =>{

    }

    const vaciarcarrito = () => {
        setCarrito ([])
    }
    //isInCart : devuelve true si el producto esta en el carrito o false si no esta
    const estaEnCarrito = () => {}

    const valorDelContexto = {
        carrito : carrito,
        cantidadTotal : cantidadTotal,
        precio_total: precio_total,
        agregarProducto: agregarProducto,
    }

    return(
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}


export default MiProvider
