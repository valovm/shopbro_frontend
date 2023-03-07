import {Button} from "react-bootstrap";

export default function ProductListItem({product, onProductInfoRequest}){

    function productInfoRequest(productId){
        if(onProductInfoRequest) { onProductInfoRequest(productId) }
    }

    return(
        <div className="product-list-item">
            <div className="product-list-item__media">
                <img src={product.image.url} className="product-list-item__image" alt={product.name} onClick={ () => productInfoRequest(product.id)}/>
            </div>
            <div className="product-list-item__content">
                <div className="product-list-item__title" onClick={ () => productInfoRequest(product.id)}>{ product.name }</div>
                <div className="product-list-item__teaser">
                    { product.teaser }
                </div>
                <div className="product-list-item__controls">
                    <Button variant="soft-primary" >Купить</Button>
                </div>
            </div>
        </div>
    )
}
