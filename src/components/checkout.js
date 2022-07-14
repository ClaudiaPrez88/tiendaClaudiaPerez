
//El Checkout se hace directamente desde el componente de Cart.js
//de todas formas no quise borrar este componente para tenerlo de apoyo en caso de necesitarlo.

// import React from "react";
// import { useState } from "react";
// import { db } from "../config/firebase";
// import { collection, addDoc,serverTimestamp } from "firebase/firestore";
// import { Button } from "react-bootstrap";
// import {Container,Row,Col} from "react-bootstrap";

// function Checkout() {
//     const [idCompra,setIdCompra] = useState("")
//     const handleBuy = () => {
//         const collectionOrdenes = collection(db,"ordenes")
//         const orderData = {
//           buyer : {
//             name : "Horacio",
//             phone : "555555555",
//             email : "test@tes.com"
//           },
//           items : [{id:1,titulo:"test producto"}],
//           date : serverTimestamp(),
//           total : 100
//         }
//         const consulta = addDoc(collectionOrdenes,orderData)
//         consulta
//           .then(resultado=>{
//             setIdCompra(resultado.id)
//             console.log(resultado.id)
//           })
//           .catch(error=>{
//             console.log(error)
//           })
//       }

//   return (
//     <>
//     <Container id="checkout">
//         <Row>
//             <Col xs={12}>
//             <h3>Checkout</h3>
//             {idCompra&&<p>Su compra es : {idCompra}</p>}
//             <Button onClick={handleBuy}>Guardar </Button>
//             </Col>
//         </Row>
//     </Container>
//     </>
//   )
// }

// export default Checkout