import ProductListItem from "./ProductListItem";


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


