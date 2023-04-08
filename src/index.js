import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './E-Commerce/Navbar';
import DarkVariantExample from './E-Commerce/Carousel';
import ContainerExample from './E-Commerce/Cards-cloths';
import Cosmatics from './E-Commerce/Cards-Cosmatics';
import ContainerFluidBreakpointExample from './E-Commerce/Select-Categary';
import AutoLayoutExample from './E-Commerce/Blog';
import GUD from './E-Commerce/About-2GUD';
import GridAutoSizingExample from './E-Commerce/input';
import Container from 'react-bootstrap/Container';
import FooterOption from './E-Commerce/footer-option';
import OffsettingExample from './E-Commerce/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <DarkVariantExample />
    <Container>
    <ContainerExample/>
    <Cosmatics />
    <ContainerFluidBreakpointExample />
    <AutoLayoutExample />
    <GUD />
    <GridAutoSizingExample />
    </Container>
    <FooterOption/>
    <OffsettingExample/>
    {/* <ShoppingCart/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
