
import Button from "../ui/Button";
import {useState} from "react";
import {Amount} from "@alfalab/core-components-amount";
import NumberInput from "../ui/NumberInput";

export default function ProductListItem({product, onProductInfoRequest = null, onCartAddItem, onCartDecreaseItem, countInCart = 0}){
    const [cartLoading, setAddingToCart] = useState(false);

    async function AddProductToCart(productItem){
        setAddingToCart(true)
        await onCartAddItem(productItem)
        setAddingToCart(false)
    }

    async function CartDecreaseItem(productId){
        setAddingToCart(true)
        await onCartDecreaseItem(productId)
        setAddingToCart(false)
    }

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
                    <Amount value={product.price.cents} minority={100} currency="RUB"></Amount>
                    {
                         countInCart <= 0 &&
                        <Button variant="soft-primary" onClick={() => AddProductToCart(product)} loading={cartLoading} >Купить</Button>
                    }
                    {
                        countInCart > 0 &&
                        <NumberInput value={countInCart}
                                     onDecrease={() => CartDecreaseItem(product.id)}
                                     onIncrease={() => AddProductToCart(product)}
                        ></NumberInput>
                    }
                </div>
            </div>
        </div>
    )
}
