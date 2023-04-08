import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './Cloths.css'

function GridAutoSizingExample() {
    return (
        <Form className="mb-5">
            <Row className="justify-content-md-center">
                <Col xs lg="2"></Col>
                <Col md="auto" className='mt-5' style={{ textAlign: 'center' }}>
                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                        Email
                    </Form.Label>
                    <InputGroup className="mb-2">
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control id="inlineFormInputGroup" placeholder="Email" />
                        <Button type="submit" className="mb-2 btn-2" variant='outline-success' href='#'>
                            Submit
                        </Button>
                    </InputGroup>
                </Col>
                <Col xs lg="2"></Col>
            </Row>
        </Form>
    );
}

export default GridAutoSizingExample;