import {Button, Image, Modal} from "react-bootstrap";

export default function ProductDetailModal({product = null, show = false, onClose = null}) {

    function close(){
        if(onClose) { onClose() }
    }

    return (
        <Modal show={show} fullscreen={true} >
            <Modal.Body>
                <Button variant="light" size="lg" className="modal-close-btn" onClick={close}>
                    X
                </Button>
                <Image
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/b8880e1ce9b84e78aa3004d5b86d5bf9_1875x1875.png"
                    fluid={true}
                ></Image>
                <img alt=""/>
                <h1>{product?.name}</h1>
                <div>
                    {product?.teaser}
                </div>
            </Modal.Body>
            <Modal.Footer className="d-block border-0">
                <div className="d-grid" >
                    <Button variant="primary" size="lg">
                        Block level button
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}
