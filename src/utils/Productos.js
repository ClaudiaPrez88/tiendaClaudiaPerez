
const productos = [
   {
    id: 1,
    name: 'Producto 1',
    image:'img/servilletas/M2201.png',
    description:'Servilletas de marca Maki. El paquete contiene 12 servilletas.',
    stock:10,
   },
    {
        id: 2,
        name: 'Producto 2',
        image:'img/servilletas/M2601.png',
        description:'Servilletas de marca Maki. El paquete contiene 12 servilletas.',
        stock:11,
    },
    {
        id: 3,
        name: 'Producto 3',
        image:'img/servilletas/M9001.png',
        description:'Servilletas de marca Maki. El paquete contiene 12 servilletas.',
        stock:32,
    }
]

const producto = 
    {
     id: 1,
     name: 'Producto 1',
     image:'img/servilletas/M2201.png',
     description:'Servilletas de marca Maki. El paquete contiene 12 servilletas.',
     stock:10,
     price: 50,
    }



export const traerProductos = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(productos);
        }, 1000)
    })
}

export const traerProducto = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(producto);
        }, 1000)
    })
}

export default productos