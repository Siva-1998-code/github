import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Axios from '../Axios';

function Chart() {
    return (
        <Container>
            <Card border="info" style={{ width: '100%' ,height:'100%' }}>
                <Card.Header className='text-center' style={{height:'307px'}}>
                    <Nav.Link href='' className='mb-3' dir="rtl">Contact</Nav.Link>
                    <Nav.Link xs lg="2" dir="rtl" >
                        Charts And Maps
                    </Nav.Link>
                </Card.Header>
            </Card>
        </Container>
    );
}

export default Chart;