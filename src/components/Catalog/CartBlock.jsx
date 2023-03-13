import {Badge} from "react-bootstrap";


export default function CartBlock({cartState}){
    return (
        <div className="cart-block">
            <Badge>{cartState.count}</Badge>
        </div>
    )
}
