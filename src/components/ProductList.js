import {Button} from "react-bootstrap";

function ProductListItem({product}){
    return(
        <div className="product_list_item">
            <div className="product_list_item__media">
                <img src={product.image.url} className="product_list_item__image" alt={product.name}/>
            </div>
            <div className="product_list_item__content">
                <div className="product_list_item__title">{ product.name }</div>
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

export default function ProductList({products}) {
 return (
     <div>
         {
             products.map(product => {
                 return (
                     <ProductListItem product={product}></ProductListItem>
                 )
             })
         }
     </div>
 )
}


