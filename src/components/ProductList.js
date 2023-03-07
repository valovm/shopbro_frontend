import {Button} from "react-bootstrap";

function ProductListItem({product, onProductInfoRequest}){

    function productInfoRequest(productId){
        if(onProductInfoRequest) { onProductInfoRequest(productId) }
    }

    return(
        <div className="product_list_item">
            <div className="product_list_item__media">
                <img src={product.image.url} className="product_list_item__image" alt={product.name} onClick={ () => productInfoRequest(product.id)}/>
            </div>
            <div className="product_list_item__content">
                <div className="product_list_item__title" onClick={ () => productInfoRequest(product.id)}>{ product.name }</div>
                <div className="product_list_item__teaser">
                    { product.teaser }
                </div>
                <div className="product_list_item__controls">
                    <Button variant="soft-primary" >Купить</Button>
                </div>
            </div>
        </div>
    )
}

export default function ProductList({products = [], onProductInfoRequest = null }) {
 return (
     <div>
         {
             products.map(product => {
                 return (
                     <ProductListItem key={product.id.toString()} product={product} onProductInfoRequest={onProductInfoRequest}></ProductListItem>
                 )
             })
         }
     </div>
 )
}


