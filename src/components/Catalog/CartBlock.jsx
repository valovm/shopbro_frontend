

export default function CartBlock({cartState}){
    return (
        <div>
            {
                Object.values(cartState.items).map((item) => {
                    return (
                        <div>{item.productItem.name} x {item.count} = {item.total}</div>
                    )
                })
            }
            <div>{cartState.total}</div>
            <div>{cartState.count}</div>
        </div>
    )
}
