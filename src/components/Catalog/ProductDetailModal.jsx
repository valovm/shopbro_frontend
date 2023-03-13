import {Image, Modal} from "react-bootstrap";
import {useState} from "react";
import Button from "../ui/Button";
import {Amount} from "@alfalab/core-components-amount";

export default function ProductDetailModal({product = null, show = false, onClose = null, onCartAddItem, countInCart = 0}) {
    const [addingToCart, setAddingToCart] = useState(false);

    function close(){
        if(onClose) { onClose() }
    }

    async function AddToCart(product){
        setAddingToCart(true)
        await onCartAddItem(product)
        setAddingToCart(false)
        close()
    }

    return (
        <Modal show={show} fullscreen={true} >
            <Modal.Body>
                <Button variant="light" size="lg" className="modal-close-btn" onClick={close}>
                    X
                </Button>
                <Image
                    src={product?.image?.url}
                    fluid={true}
                ></Image>
                <img alt=""/>
                <h1>{product?.name}</h1>
                <div>
                    {product?.teaser}
                </div>
            </Modal.Body>
            { product &&
                <Modal.Footer className="d-block border-0">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <Amount minority={100} value={product.price.cents} currency="RUB"></Amount>
                        </div>
                        <div className="col-6">
                            <div className="d-grid">
                                <Button variant="primary" size="lg" onClick={() => AddToCart(product)} loading={addingToCart}>
                                    В корзину
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal.Footer>
            }

        </Modal>
    )
}
