import _state from './state'
import {
    SET_USERINFO,GET_USERINFO,REMOVE_USERINFO
} from './const'
const reducer = (state=_state,action)=>{
    let newState = Object.assign({},state)
    switch (action.type) {
        case SET_USERINFO:
            let user_info = action.userInfo
            let isHas = state.userInfo.some(item=>{
                if(user_info.user_name == item.user_name){
                    action.callback(true)
                    return true
                }else{
                    return false
                }
            })
            if(!isHas){
                state.userInfo.push(user_info)
                action.callback(false)
            }
            break;
        case GET_USERINFO:
            let userinfo = action.userInfo
            if(state.userInfo.length==0){
                alert('请先注册')
            }
            let isLogin = state.userInfo.some(item => {
                if(userinfo.user_name == item.user_name && userinfo.user_pass == item.user_pass){
                    localStorage.setItem ('userInfo',JSON.stringify(userinfo))
                    action.callback(true)
                    return true
                }else{
                    action.callback(false)
                    return false
                }
            })
            console.log(isLogin,'999')
            if (isLogin) {
                newState.isOut = isLogin
            }
            console.log(state.isOut,'444')
            break;
        case REMOVE_USERINFO:
            localStorage.removeItem('userInfo')
            newState.isOut=false
            break;
    }
    return newState
}
export default reducer