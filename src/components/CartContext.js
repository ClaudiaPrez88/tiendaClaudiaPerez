import React from 'react'
import { useState,createContext  } from 'react'


export const contexto = createContext()
const Provider = contexto.Provider


export  const MiProvider = ({children}) =>{
    const [carrito, setCarrito]=useState([]);
    const[cantidadTotal, setCantidadTotal] = useState(0) ;
    const [precioTotal, setPrecioTotal]=useState(0);

    const agregarProducto = (producto, cantidad) => {
        if (isOncarrito(producto.id)) {
            sumarCantidad(producto, cantidad);
        } else {
            setCarrito([...carrito, { ...producto, cantidad }]);
        }
    };
    const isOncarrito = (id) => carrito.some((producto) => producto.id === id);

    const sumarCantidad = (producto, cantidad) => {
        const newProducts = carrito.map((product) => {
            if (product.id === producto.id) {
                const newProduct = {
                    ...product,
                    cantidad: product.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return product;
            }
        });
        console.log(newProducts)
        setCarrito(newProducts);
    };

   
    const deleteItem = (id) => {setCarrito(carrito.filter((producto) => producto.id !== id))}

    const deleteAll = (_) => setCarrito([]);
 
    
    

    
    return(
        <Provider    value={{
            agregarProducto,
            carrito,
            deleteItem,
            deleteAll,
            precioTotal
        }}
    >
            {children}
        </Provider>
    )
}


