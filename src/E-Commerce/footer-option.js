// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './Cloths.css'
import { GrInstagram } from "react-icons/gr";
import { AiFillFacebook } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { Button } from 'react-bootstrap';

function FooterOption() {
    return (
        <section className='bg pe-5 ps-5 pb-5 pt-5' fluid>
            <Row>
                <Col>
                    <h5 className='py-3'>Shop</h5>
                    <ListGroup.Item className='py-1'><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Gift Cards</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Sitemap</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#' style={{ textDecoration: 'none', color: 'white' }}>2GUD blog</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#' style={{ textDecoration: 'none', color: 'white' }}>2GUD United Kingdom</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#' style={{ textDecoration: 'none', color: 'white' }}>2GUD Germany</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#' style={{ textDecoration: 'none', color: 'white' }}>2GUD Canada</a></ListGroup.Item>
                </Col>
                <Col>
                    <h5 className='py-3'>Sell</h5>
                    <ListGroup.Item className='py-1'><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Sell on Etsy</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Teams</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Forums</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Affiliates & Creators</a></ListGroup.Item>
                </Col>
                <Col>
                    <h5 className='py-3'>About</h5>
                    <ListGroup.Item className='py-1'><a href='#'style={{ textDecoration: 'none', color: 'white' }}>2GUD, Inc.</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#'style={{ textDecoration: 'none', color: 'white' }}>Policies</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#'style={{ textDecoration: 'none', color: 'white' }}>Investors</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#'style={{ textDecoration: 'none', color: 'white' }}>Careers</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#'style={{ textDecoration: 'none', color: 'white' }}>Press</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#'style={{ textDecoration: 'none', color: 'white' }}>Impact</a></ListGroup.Item>
                    <ListGroup.Item className='py-1'><a href='#'style={{ textDecoration: 'none', color: 'white' }}>Legal imprint</a></ListGroup.Item>
                </Col>
                <Col>
                    <h5 className='py-3'>Help</h5>
                    <ListGroup.Item className='py-1'><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Help Centre</a></ListGroup.Item>
                    <ListGroup.Item className='py-1 '><a href='#' style={{ textDecoration: 'none', color: 'white' }}>Privacy settings</a></ListGroup.Item>
                    <Button className='mt-4 mb-4' href='#'><span className='logo '>2GUD</span> Download the 2GUD app</Button>
                    <Col className=' icon'>
                        <a href='#' className='pe-3' style={{ textDecoration: 'none', color: 'white' }}><GrInstagram /></a>
                        <a href='#' className='pe-3' style={{ textDecoration: 'none', color: 'white' }}><AiFillFacebook /></a>
                        <a href='#' className='pe-3' style={{ textDecoration: 'none', color: 'white' }}><BsPinterest /></a>
                        <a href='#' className='pe-3' style={{ textDecoration: 'none', color: 'white' }}><AiFillTwitterCircle /></a>
                        <a href='#' className='pe-3' style={{ textDecoration: 'none', color: 'white' }}><AiFillYoutube /></a>
                    </Col>
                </Col>
            </Row>
        </section>
    );
}

export default FooterOption;

