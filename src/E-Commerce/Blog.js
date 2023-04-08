import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BsArrowRight } from "react-icons/bs";

function AutoLayoutExample() {
    return (
        <Container className='mt-5 mb-5'>
            <a href='#' style={{ textDecoration: 'none', color: 'black' }}><h2 className=' mb-5'>Fresh from the blog <BsArrowRight /></h2></a>
            <Row>
                <Col>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '19rem' }}>
                            <Card.Img variant="top" src="https://i.etsystatic.com/inv/a9c005/4742683730/inv_425x340.4742683730_46003p3g.jpg?version=0" />
                            <Card.Body>
                                <Card.Text>
                                    Shopping guides
                                </Card.Text>
                                <Card.Title>Desi girl style : Gorgeous Saree for every occasion</Card.Title>
                                <Card.Text>
                                    From Banarasi to Bandhani and tussar silk to kota doria, shop gorgeous sarees that give all the wonderfully desi vibes.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '19rem' }}>
                            <Card.Img variant="top" src="https://i.etsystatic.com/inv/f82237/4752329402/inv_620x495.4752329402_86x8xkaz.jpg?version=0" />
                            <Card.Body>
                                <Card.Text>
                                    Gift ideas
                                </Card.Text>
                                <Card.Title>Heartfelt Engagement Gifts for your closest friends</Card.Title>
                                <Card.Text>
                                    Congratulate the newly-engaged couple with meaningful gifts that speak to their unique love story.Enjoy that movement
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col>
                    <a href='#' style={{ textDecoration: 'none', color: 'black' }}>
                        <Card style={{ width: '19rem' }}>
                            <Card.Img variant="top" src="https://i.etsystatic.com/inv/908d51/4768896233/inv_425x340.4768896233_2j81o5zv.jpg?version=0" />
                            <Card.Body>
                                <Card.Text>
                                    Shopping guides
                                </Card.Text>
                                <Card.Title>A Dinner table of your dreams</Card.Title>
                                <Card.Text>
                                    From table linen and napkin rings to serving trays and plates–explore a celebratory dinner table set-up that will get you in the Easter spirit.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default AutoLayoutExample;