import {combineReducers} from 'redux'
import categoryReducer from './categorylist/reducer'
import LoginReducer from './Login/reducer'
import ProductLidt from './productList/reducer'

const reducer = combineReducers({
    categorylist:categoryReducer,
    Login:LoginReducer,
    productList:ProductLidt
})

export default reducer