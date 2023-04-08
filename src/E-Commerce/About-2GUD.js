import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import './Cloths.css'

function GUD() {
    return (
        <Container className='mb-5' >
            <Row className="justify-content-md-center">
                <Col xs lg="2" style={{ width: '19rem' }}></Col>
                <Col md="auto" className='mb-5 '>
                    <h1 className='mb-3'>What is 2GUD ?</h1>
                    <p><a href='#' style={{ textDecoration: 'none' }} className='bt-line'>Read our wonderfully weird story</a></p>
                </Col>
                <Col xs lg="2"></Col>
            </Row>
            <Row>
                <Col style={{ width: '19rem' }}>
                    <h2 className='mb-4'>A community doing good</h2>
                    <p>
                        2GUD is a global online marketplace, where people come together to make, sell, buy and collect unique items. We’re also a community pushing for positive change for small businesses, people, and the planet. Here are some of the ways we’re making a positive impact, together.
                    </p>
                </Col>
                <Col style={{ width: '19rem' }}>
                    <h2 className='mb-2'>Support independent creators</h2>
                    <p>
                        There’s no 2GUD warehouse – just millions of people selling the things they love. We make the whole process easy, helping you connect directly with makers to find something extraordinary.
                    </p>
                </Col>
                <Col style={{ width: '19rem' }}>
                    <h2 className='mb-5'>Peace of mind</h2>
                    <p>
                        Your privacy is the highest priority of our dedicated team. And if you ever need assistance, we are always ready to step in for support.
                    </p>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs lg="2"></Col>
                <Col className='mt-5' style={{textAlign:'center'}}>
                    <h3 className='mb-4'>Have a question? Well, we’ve got some answers.</h3>
                    <Button variant='secondary' className='btn' href='#'>Go To Help Center</Button>
                </Col>
                <Col xs lg="2"></Col>
            </Row>
        </Container>
    );
}

export default GUD;