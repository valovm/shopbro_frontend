function CartReducerInitializer(args= null) {
    return { items: {}, count: 0, total: 0 }
}
const ADD_ITEM = 'ADD_ITEM'
const DECREASE_ITEM = 'DECREASE_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'

function CartReducer(state, action) {
    switch (action.type){
        case ADD_ITEM: {
            const product = action.productItem
            const newState = {...state, total: 0, count: 0 }
            newState.items = { ...state.items }
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
            Object.values(newState.items).forEach(item => {
                newState.total += item.total
                newState.count += item.count
            })

            return newState
        }
        case DECREASE_ITEM: {
            const cartItem = state.items[action.productId]
            if(!cartItem){ return state }

            const newState = {...state, total: 0, count: 0 }
            newState.items = {...newState.items}
            newState.items[action.productId] = {
                ...cartItem,
                count: cartItem.count - 1,
                total: cartItem.productItem.price.cents * (cartItem.count - 1)
            }


            Object.values(newState.items).forEach(item => {
                newState.total += item.total
                newState.count += item.count
            })

            return newState
        }
        case REMOVE_ITEM: {
            const cartItem = state.items[action.productId]
            if(!cartItem){ return state }

            const newState = {...state, count: 0, total: 0 }
            const items =  {...newState.items }
            delete items[action.productId]
            newState.items = items

            Object.values(newState.items).forEach(item => {
                newState.total += item.total
                newState.count += item.count
            })

            return newState
        }
    }
}
const CartActions = { ADD_ITEM, DECREASE_ITEM, REMOVE_ITEM }
export { CartReducerInitializer, CartReducer, CartActions  }
