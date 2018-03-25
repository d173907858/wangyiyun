import _state from './state'
import {
    SET_CATEGORY_DATA
} from './const'
const reducer = (state=_state,action)=>{
    let newState = Object.assign({},state)
    switch (action.type) {
        case SET_CATEGORY_DATA:
            newState.categoryList = action.categoryList
            break;
        default: break;
    }
    return newState
}
export default reducer