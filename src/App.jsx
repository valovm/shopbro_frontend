import './styles/App.sass';
import {Container, Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProductList from "./components/Catalog/ProductList";
import ProductDetailModal from "./components/Catalog/ProductDetailModal";

import { useState } from 'react';
import { getProductDetail, getProducts } from "./services/ProductService";
import Logo from "./components/Logo";

function BroNavbar() {
    return (
        <Navbar sticky="top">
            <div className="container">
                <Navbar.Brand href="#home"><Logo></Logo></Navbar.Brand>
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
    const [products, setProducts] = useState([]);

    getProducts().then(res => { setProducts(res) })

    function openProduct(productId){
        setProductModalShow(true)
        getProductDetail(productId).then(product => setProductActive(product))
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
                    <ProductList products={products} onProductInfoRequest={openProduct}></ProductList>
                </Container>
            </main>
            <ProductDetailModal product={productActive} show={productModalShow} onClose={closeProduct}></ProductDetailModal>
        </div>
    );
}
