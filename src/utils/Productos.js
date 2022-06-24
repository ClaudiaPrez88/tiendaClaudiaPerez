
const productos = [
    {
     id: 1,
     name: 'Producto 1',
     image:'img/servilletas/M2201.png',
     description:'Servilletas de marca Maki. El paquete contiene 12 servilletas.',
     stock:10,
     category:'Campo',
    },
     {
         id: 2,
         name: 'Producto 2',
         image:'img/servilletas/M2601.png',
         description:'Servilletas de marca Maki. El paquete contiene 12 servilletas.',
         stock:11,
         category:'Flores'
     },
     {
         id: 3,
         name: 'Producto 3',
         image:'img/servilletas/M9001.png',
         description:'Servilletas de marca Maki. El paquete contiene 12 servilletas.',
         stock:32,
         category:'Animales'
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
     return new Promise((resolve) => {
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
 
 export const getProductById = (id) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id === id));
        }, 500)
    })
}

export const getProductByCategory = (category) =>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos.filter(prod => prod.category === category));
        }, 500)
    })
}
 export default productos