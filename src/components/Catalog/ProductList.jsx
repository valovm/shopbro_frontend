import ProductListItem from "./ProductListItem";
export default function ProductList({
                                        products = [],
                                        onProductInfoRequest = null,

                                        onCartAddItem = null,
                                        onCartDecreaseItem = null,
                                        cartState}) {

    return (
         <div>
             {
                 products.map(product => {
                     return (
                         <ProductListItem
                             key={product.id.toString()}
                             product={product}
                             onProductInfoRequest={onProductInfoRequest}
                             onCartAddItem={onCartAddItem}
                             onCartDecreaseItem={onCartDecreaseItem}
                             countInCart={cartState.items[product.id]?.count || 0}
                         >
                         </ProductListItem>
                     )
                 })
             }
         </div>
    )
}


