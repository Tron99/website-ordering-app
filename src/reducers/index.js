
export const orderActionReducer = (state ={}, action) =>{
    switch(action.type){
        case 'PUT_ORDER':
        return Object.assign({
            orderType:action.orderId,
            orderStatus:'PENDING',
            orderDescription:action.orderDescription
        })
        case 'CANCEL_ORDER':
        return{
            orderId:action.orderId
        }
        default:
            return state;
    }
}

export const orderStatusReducer = (state={}, action) =>{
    switch(action){
        case 'MAKE_PENDING':
        return Object.assign({orderStatus:'PENDING'},state);

        case 'MAKE_ACTIVE':
        return Object.assign({orderStatus:'ACTIVE'},state);

        case 'MAKE_RECIEVED':
        return Object.assign({orderStatus:'RECIEVED'}, state);

        default:
            return state;
    }
}