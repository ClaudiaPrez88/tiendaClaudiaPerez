import {Card,Button,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './ItemCount';

const ContenedorImg = (props) => {
    return(
        <>
         <Col xs={12} sm={6} lg={3}>
            <Card>
                <Card.Img variant="top" src={props.texto} />
                <Card.Body>
                <ItemCount/>
                </Card.Body>
            </Card>
          </Col>
        </>
    )
}



export default ContenedorImg