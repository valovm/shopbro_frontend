import './styles/App.sass';
import {Container, Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import ProductList from "./components/Catalog/ProductList";
import ProductDetailModal from "./components/Catalog/ProductDetailModal";

import {useReducer, useState} from 'react';

import Logo from "./components/Logo";


import {getProductDetail, getProducts} from "./services/ProductService";
import CartBlock from "./components/Catalog/CartBlock";
import {CartActions, CartReducer, CartReducerInitializer} from "./reducers/CartReducer";

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
    const [cartState, cartAction] = useReducer(CartReducer, null, CartReducerInitializer)

    const [productModalShow, setProductModalShow] = useState(false);
    const [productActive, setProductActive] = useState(null);
    const [products, setProducts] = useState(null);

    if(products == null){
        getProducts().then(res => { setProducts(res) })
    }

    function openProduct(productId){
        setProductModalShow(true)
        getProductDetail(productId).then(product => setProductActive(product))
    }

    function closeProduct(){
        setProductModalShow(false)
        setProductActive(null)
    }

    async function cartAddItem(productItem){
        cartAction({type: CartActions.ADD_ITEM, productItem })
    }
    async function cartDecreaseItem(productId){
        cartAction({type: CartActions.DECREASE_ITEM, productId })
    }

    return (
        <div>
            <BroNavbar></BroNavbar>

            <main>
                <Container>
                    { products &&
                        <ProductList
                            products={products}
                            onProductInfoRequest={openProduct}
                            onCartAddItem={cartAddItem}
                            onCartDecreaseItem={cartDecreaseItem}
                            cartState={cartState}
                        >
                        </ProductList>
                    }
                </Container>
            </main>
            <ProductDetailModal
                product={productActive}
                show={productModalShow}
                onClose={closeProduct}
                onCartAddItem={cartAddItem}>
            </ProductDetailModal>
            <CartBlock cartState={cartState}></CartBlock>
        </div>
    );
}
