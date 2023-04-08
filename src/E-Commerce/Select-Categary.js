import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { BsArrowRight } from "react-icons/bs";

function ContainerFluidBreakpointExample() {
    return (
        <Container fluid="md" className='mt-5 mb-5'>
            <a href='#' style={{textDecoration:'none',color:'black'}}><h2 className=' mb-5'>Shop our selections <BsArrowRight/> </h2></a>
            <Row>
                <Col>
                    <Card style={{ width: '13rem' }} className="mb-3">
                        <a href='#'>
                            <Card.Img variant="top" src="https://i.etsystatic.com/22605194/c/2000/1589/0/264/il/14ccfa/3657188176/il_340x270.3657188176_pmre.jpg" />
                        </a>
                        <Card.Body>
                            <Card.Title>Kitchen </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '13rem' }} className="mb-3">
                        <a href='#'>
                            <Card.Img variant="top" src="https://i.etsystatic.com/18954143/r/il/c1bccf/2243342703/il_340x270.2243342703_nln7.jpg" />
                        </a>
                        <Card.Body>
                            <Card.Title>Men's Fashion</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '13rem' }} className="mb-3">
                        <a href='#'>
                            <Card.Img variant="top" src="https://i.etsystatic.com/22038449/r/il/a0fd6f/3384485992/il_340x270.3384485992_8cy2.jpg" />
                        </a>
                        <Card.Body>
                            <Card.Title>Home Decor </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '13rem' }} className="mb-3">
                        <a href='#'>
                            <Card.Img variant="top" src="https://i.etsystatic.com/32541884/r/il/a56807/3849973862/il_340x270.3849973862_p1w4.jpg" />
                        </a>
                        <Card.Body>
                            <Card.Title>For Your Home</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '13rem' }} className="mb-3">
                        <a href='#'>
                            <Card.Img variant="top" src="https://i.etsystatic.com/33029693/c/1914/1521/553/6/il/cba332/4250910467/il_340x270.4250910467_d03v.jpg" />
                        </a>
                        <Card.Body>
                            <Card.Title>Office Decor</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default ContainerFluidBreakpointExample;