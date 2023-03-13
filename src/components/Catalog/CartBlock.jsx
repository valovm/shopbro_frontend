import {Card} from "react-bootstrap";
import {Amount} from "@alfalab/core-components-amount";
import NumberInput from "../ui/NumberInput";
import Button from "../ui/Button";


export default function CartBlock({cartState, onIncreaseItem, onDecreaseItem, onRemoveItem}){
    return (
        <div className="cart-block">
            <h2>Корзина</h2>
            <Amount value={cartState.total} minority={100} currency="RUB"></Amount>
            {
                Object.values(cartState.items).map((item) =>{
                    return (
                        item.count > 0 &&
                        <Card key={'cart_' + item.productItem.id}>
                            <Card.Body className="p-2">
                                <div className="cart-list-item__body">
                                    <div className="cart-list-item__media">
                                        <img src={item.productItem.image.url} className="product-list-item__image" alt={item.productItem.name}/>
                                    </div>
                                    <div className="cart-list-item__content">
                                        <div className="cart-list-item__title">{item.productItem.name}</div>
                                        <div className="cart-list-item__teaser">{item.productItem.teaser}</div>
                                    </div>
                                </div>


                            </Card.Body>
                            <Card.Footer className="p-2">
                                <Button onClick={() => onRemoveItem(item.productItem.id)}>Delete</Button>
                                <Amount value={item.total} minority={100} currency="RUB"></Amount>

                                <NumberInput value={item.count}
                                             onIncrease={() => onIncreaseItem(item.productItem)}
                                             onDecrease={() => onDecreaseItem(item.productItem.id)}
                                ></NumberInput>
                            </Card.Footer>
                        </Card>
                    )
                })
            }
        </div>
    )
}
