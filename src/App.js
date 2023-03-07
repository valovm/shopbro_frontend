import './styles/App.sass';
import {Button, Container, Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProductList from "./components/ProductList";
import ProductDetailModal from "./components/ProductDetailModal";

import { useState } from 'react';

const products = [
    {
        name: "Cheeseburger Pizza",
        image: {
            url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/en-GB/b5f1aa0e-a950-4dde-94eb-1c1d79ae82ca_292x292.webp'
        },
        teaser: "Beef, tomatoes, red onions, cheddar, mozzarella, tomato sauce, mayonnaise, ketchup, peri peri",
        price: {
            cents: 7400,
            currency: 'RUB',
        }
    },
    {
        name: "Курица с четырьмя сырами",
        image: {
            url: 'https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/en-GB/debc621a-609c-444f-98b0-2b0add4e5bbb_292x292.webp'
        },
        teaser: "Сэндвич с курицей и четырьмя сырами - сыр, сливочный сыр, курица-гриль, горгонзола, пармезан и оливковое масло.",
        price: {
            cents: 7400,
            currency: 'RUB',
        }
    },
]


function BroNavbar() {
    return (

    <Navbar sticky="top" bg="">
        <div className="container">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Пицца</Nav.Link>
                <Nav.Link href="#features">Закуски</Nav.Link>
                <Nav.Link href="#pricing">Десерты</Nav.Link>
                <Nav.Link href="#pricing">Напитки</Nav.Link>
                <Nav.Link href="#pricing">Другие товары</Nav.Link>
            </Nav>
        </div>
    </Navbar>
    );
}




export default function App() {
    const [productModalShow, setProductModalShow] = useState(false);
    const [productActive, setProductActive] = useState(null);


    function openProduct(){
        setProductModalShow(true)
        setProductActive(products[0])
    }

    function closeProduct(){
        setProductModalShow(false)
        setProductActive(null)
    }

    return (
        <div>

            <BroNavbar></BroNavbar>

            <main>
                <Container>
                    <h2>Пицца</h2>
                    <Button onClick={openProduct}>AA</Button>
                    <div>
                        <ProductList products={products}></ProductList>
                        <ProductList products={products}></ProductList>
                    </div>
                    <h2>Закупки</h2>
                    <div>
                        <ProductList products={products}></ProductList>
                        <ProductList products={products}></ProductList>
                    </div>
                    <h2>Десерты</h2>
                    <div>
                        <ProductList products={products}></ProductList>
                        <ProductList products={products}></ProductList>
                    </div>
                    <h2>Напитки</h2>
                    <div>
                        <ProductList products={products}></ProductList>
                        <ProductList products={products}></ProductList>
                    </div>
                </Container>
            </main>
            <div>
                {[
                    'primary',
                    'secondary',
                    'success',
                    'danger',
                    'warning',
                    'info',
                    'light',
                    'dark',
                ].map((variant) => (
                    <div style={ { paddingBottom: '20px'}}>
                        <Button variant={ variant }>Hi Bootstrap</Button>
                        &nbsp;
                        <Button variant={ "soft-" + variant }>Hi Bootstrap</Button>
                        &nbsp;
                        <Button variant={ "outline-" + variant }>Hi Bootstrap</Button>
                    </div>
                ))
                }

            </div>
            <ProductDetailModal product={productActive} show={productModalShow} onClose={closeProduct}></ProductDetailModal>
        </div>
    );
}
