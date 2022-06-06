import {Card,Button,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContenedorImg = (props) => {
    console.log(props.texto)
    return(
        <>
         <Col xs={12} sm={6} lg={3}>
            <Card>
                <Card.Img variant="top" src={props.texto} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
          </Col>
        </>
    )
}



export default ContenedorImg