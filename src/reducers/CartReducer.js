function CartReducerInitializer(args= null) {
    return { items: {}, count: 0, total: 0 }
}
const ADD_ITEM = 'ADD_ITEM'
const DECREASE_ITEM = 'DECREASE_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

function refreshTotals(state){
    state.total = 0
    state.count = 0
    Object.values(state.items).forEach(item => {
        state.total += item.total
        state.count += item.count
    })
}

function removeItem(state, productId){
    const cartItem = state.items[productId]
    if(!cartItem){ return state }

    const newState = {...state }
    const items =  {...newState.items }
    delete items[productId]
    newState.items = items

    refreshTotals(newState)

    return newState
}

function CartReducer(state, action) {
    switch (action.type){
        case ADD_ITEM: {
            const product = action.productItem
            const newState = {...state, items: { ...state.items } }
            if(newState.items[product.id]){
                newState.items[product.id] = {
                    ...newState.items[product.id],
                    count: newState.items[product.id].count + 1,
                    total: product.price.cents * (newState.items[product.id].count + 1)
                }
            }else{
                newState.items[action.productItem.id] = {
                    productItem: { ...action.productItem },
                    count: 1,
                    total: product.price.cents
                }
            }
            refreshTotals(newState)

            return newState
        }
        case DECREASE_ITEM: {
            const cartItem = state.items[action.productId]
            if(!cartItem){ return state }
            if(cartItem.count == 1) { return removeItem(state, action.productId) }

            const newState = {...state, items: { ...state.items } }
            newState.items[action.productId] = {
                ...cartItem,
                count: cartItem.count - 1,
                total: cartItem.productItem.price.cents * (cartItem.count - 1)
            }
            refreshTotals(newState)

            return newState
        }
        case REMOVE_ITEM: {
            return removeItem(state, action.productId)
        }
    }
}
const CartActions = { ADD_ITEM, DECREASE_ITEM, REMOVE_ITEM }
export { CartReducerInitializer, CartReducer, CartActions  }
