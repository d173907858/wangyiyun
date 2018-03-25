import _state from './state'
import {
    GET_PRODUCT_LIST,GET_GOODS
} from './const'
const reducer = (state=_state,action)=>{
    let newState = Object.assign({},state)
    switch (action.type) {
        case GET_PRODUCT_LIST:
            newState.productList = action.productList
            break;
        case GET_GOODS:
            let product = action.carts
            console.log(action,'000')
            let isHas = state.carts.some((good,i)=>{
                if(product.goodId == good.goodId){
                    good.goodNum += product.goodNum
                    // if(good.goodNum<=0){
                    //     console.log('没有了')
                    //     state.carts.splice(i,1)
                    // }
                    return true
                }else{
                    return false
                }
            })
            if (!isHas) {
                // return info
                newState.carts.push(product)
            }
            break;
        default: break;
    }
    return newState
}
export default reducer