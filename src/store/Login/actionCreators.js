
import {
    SET_USERINFO,GET_USERINFO,REMOVE_USERINFO
} from './const'
import { Toast } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'


let actionCreators = {
   
    setUserInfo (user_info,callback) {
        return (dispatch) => {
            let reg = /^\w{3,12}$/g
            let {user_name,user_pass} = user_info
            if(!user_name){
                Toast.fail('用户名不能为空')
                return false
            }
            if( !user_pass){
                Toast.fail('密码不能为空')
                return false
            }
            if(!reg.test(user_name)){
                Toast.fail('用户名格式不正确 至少包含3-12位字符')
            }
            dispatch({type:SET_USERINFO,userInfo:user_info,callback})
            
           
        }
    },
    getUserInfo(user_info,callback) {
        return (dispatch) => {
            let reg = /^\w{3,12}$/g
            let {user_name,user_pass} = user_info
            if(!user_name){
                Toast.fail('用户名不能为空')
                return false
            }
            if( !user_pass){
                Toast.fail('密码不能为空')
                return false
            }
            if(!reg.test(user_name)){
                Toast.fail('用户名格式不正确 至少包含3-12位字符')
            }
            dispatch({type:GET_USERINFO,userInfo:user_info,callback})
        }
    },
    removeUserInfo(){
        return (dispatch) => {
            dispatch({type:REMOVE_USERINFO})    
        }
    }
}
export default actionCreators