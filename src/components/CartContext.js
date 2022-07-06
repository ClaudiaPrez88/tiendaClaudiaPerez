import React from 'react'
import { useState,createContext  } from 'react'


export const contexto = createContext()
const Provider = contexto.Provider


export  const MiProvider = ({children}) =>{
    const [carrito, setCarrito]=useState([]);
    const[cantidadTotal, setCantidadTotal] = useState(0) ;
    const [precioTotal, setPrecioTotal]=useState(0);
   
    // const agregarProducto = (producto,cantidad) => {
    //    const copia = [...carrito]
    //    const nuevoProducto = {...producto,cantidad: cantidad,}
    //    copia.push(nuevoProducto)
    //    setCarrito(copia) 
    //    setCantidadTotal(cantidadTotal+cantidad)
    //    setPrecioTotal(precioTotal+cantidad*producto.precio)
    // };

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
        setCarrito(newProducts);
    };

    const totalPrice = () => {  return 10;  };

    const totalUnidades = () => {  return 5; };

    const deleteItem = (id) => {
        setCarrito(carrito.filter((product) => product.id !== id));
    };

    const deleteAll = (_) => setCarrito([]);
 
    
    
    const valorDelContexto = {
        carrito:carrito,
        cantidadTotal : cantidadTotal,
        precioTotal:precioTotal,
        agregarProducto : agregarProducto,
    }

    
    return(
        <Provider    value={{
            agregarProducto,
            carrito,
            deleteItem,
            totalPrice,
            deleteAll,
            totalUnidades,
            valorDelContexto
        }}
    >
            {children}
        </Provider>
    )
}


