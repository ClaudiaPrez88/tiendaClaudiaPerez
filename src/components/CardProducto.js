import {Card,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carproduct = (props) => {

    return(
        <>
         <Col xs={12} sm={6} lg={4}>
            <Card>
                <Card.Img variant="top" src={props.servilleta} alt={props.nombre} />
                <Card.Body>
                </Card.Body>
            </Card>
          </Col>
        </>
    )
}



export default Carproduct