import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Cloths.css'
import { BiWorld } from "react-icons/bi";
import Nav from 'react-bootstrap/Nav';

function OffsettingExample() {
  return (
    <section className='bg2 pe-5 ps-5 pt-3' >
      <Row>
        <Col md={4}>
          <button className='btn3'>
            <BiWorld className='me-2' />
            India
            English (UK)
          </button>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>


        <Col className="justify-content-end">

          <Nav className="justify-content-end" activeKey="/home">
            <p className="text-center text-light py-2">© 2023 Etsy, Inc.</p>
            <Nav.Item>
              <Nav.Link href="/home" className="text-light">Terms of Use</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1" className="text-light">Privacy</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2" className="text-light"> Interest-based ads</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-3" className="text-light">
              Regions
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </section>
  );
}

export default OffsettingExample;