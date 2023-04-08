import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cloths.css'
import { BsArrowRight } from "react-icons/bs";

function Cosmatics() {
    return (
        <Container>
            <h2 className="mb-5 mt-5">Popular gifts right now</h2>
            <a href='#'  style={{ textDecoration: 'none', color: 'black' }}>Shop all deals<BsArrowRight /></a>
            <Row>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }} className="mb-3">
                            <a href='#'>
                                <Card.Img variant="top" src="https://i.etsystatic.com/32477306/c/2000/1589/0/256/il/0bcd64/3491080620/il_340x270.3491080620_oh18.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Dainty Name Necklace with Birth Flower</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }}>
                            <a href='#'>
                                <Card.Img variant="top" src="https://i.etsystatic.com/24921631/r/il/6cadaa/4207115880/il_340x270.4207115880_2hhg.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Pamper Gift Box, Relax, Pamper Hamper, For Her</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }}>
                            <a href='#'>
                                <Card.Img variant="top" src="https://i.etsystatic.com/35966576/c/1614/1283/669/351/il/e1510f/4033777789/il_340x270.4033777789_dqlw.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Birth Flower Jewelery Travel Case , Birth Flower Gift</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }}>
                            <a href='#'>
                                <Card.Img variant="top" src="https://i.etsystatic.com/15999839/r/il/5edb06/2984633165/il_340x270.2984633165_3t0u.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Shop for handmade, vintage, custom</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }}>
                            <a href='#'>
                                <Card.Img variant="top" src="https://i.etsystatic.com/27890741/c/2343/1862/320/560/il/31a0dd/4028709894/il_340x270.4028709894_i6tr.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Shop for handmade, vintage, custom</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }}>
                            <a href='#'>
                                <Card.Img variant="top" src="https://i.etsystatic.com/24921631/r/il/6cadaa/4207115880/il_340x270.4207115880_2hhg.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Shop for handmade, vintage, custom</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow'>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '18rem' }}>
                            <a href='#'>
                                <Card.Img variant="top" src="https://i.etsystatic.com/27751508/r/il/254978/4263660916/il_340x270.4263660916_c7z1.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Etsy Israel - Shop for handmade, vintage</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col className='shadow '>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }} >
                        <Card style={{ width: '18rem' }} className='mb-5'>
                            <a href='#'>
                                <Card.Img variant="top" src="https://i.etsystatic.com/27106899/c/2000/1589/0/239/il/bd0c9f/3823830677/il_340x270.3823830677_rjxd.jpg" />
                            </a>
                            <Card.Body>
                                <Card.Text>
                                    Upto 40% off an
                                </Card.Text>
                                <Card.Title>Hoiaucraft Name Necklace with Birth Flower</Card.Title>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Cosmatics;