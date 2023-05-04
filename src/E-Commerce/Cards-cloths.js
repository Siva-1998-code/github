import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cloths.css'
import { BsArrowRight } from "react-icons/bs";

function ContainerExample() {
    return (
        <Container>
            <h2 className="mb-5 ">Deals of the day</h2>
            <a href='#' style={{ textDecoration: 'none', color: 'black' }}>Shop all deals<BsArrowRight /></a>
            <Row>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }} className="mb-3 ">
                            <Card.Img variant="top" src="https://i.etsystatic.com/22368382/r/il/006d21/4245808662/il_300x300.4245808662_a3x4.jpg" />
                            <Card.Body >
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Women's Ethnic Clothing</Card.Title>
                                <Button variant="primary" className='text-dark'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.etsystatic.com/32501528/c/1488/1488/0/0/il/23a5b4/3700725057/il_300x300.3700725057_szgj.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Women's Western Clothing</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.etsystatic.com/25566015/c/2003/2003/0/274/il/5b71e2/3196479462/il_300x300.3196479462_20xh.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Men's Clothing</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.etsystatic.com/12917913/r/il/7ef5de/4396673299/il_300x300.4396673299_bkgg.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Fashion Jewellery</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.etsystatic.com/32501528/c/1757/1757/247/180/il/67dc01/4248212322/il_300x300.4248212322_psvv.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Winter Clothing</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.etsystatic.com/23528878/r/il/625e23/2589827894/il_300x300.2589827894_bi5a.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Wedding Clothing</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.ebayimg.com/images/g/DSUAAOSwPHJhxUUG/s-l500.jpg" />
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Women's Party Clothing</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }} className='mb-5'>
                            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvuItz5E4he-fIqUdzB_IC7PnAh-SMvqb4sO4KQ6Cmx94haW1LX9vGWuPbrQgQkoBMx_E&usqp=CAU" />
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Women's Casual Clothing</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default ContainerExample;