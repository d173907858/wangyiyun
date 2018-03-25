import React,{Component} from 'react'
import '../Login/index.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../../store/Login/actionCreators'
import { Toast } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

class Register extends Component {
    constructor (props) {
        super(props)
        this.register = this.register.bind(this)
    }
    register () {
        let user_name =this.username.value
        let user_pass = this.password.value
        this.props.actions.setUserInfo({user_name,user_pass},(result)=>{
            if(!result){
                Toast.success('注册成功,请登录')
                this.props.history.replace('/login')
            }else{
                Toast.fail('用户已注册')
            }
        })
        
    }
        
    render () {
        return (
            <div className="register">
                <form>
                    <div className="input-item">
                        <div className="item-list">
                            <input type="text" id="username" ref={username=>this.username=username} placeholder="请输入您的账号"/>
                        </div>
                        <div className="item-list">
                            <input type="password" ref={password=>this.password=password} id="password" placeholder="请输入您的密码"/>
                        </div>
                    </div>
                    <div className="btn-login">
                        <button type="button" onClick = {this.register} className="btn_green" id="btnRegister">注册</button>
                    </div>
                    <p className="tc">点击注册，即代表同意《易果服务协议》</p>
                    <div className="bottomcopyright">
                        <em className="logo"> </em>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(state=>{
    console.log(state)
    return {
        userInfo:state.userInfo
    }
},(dispatch)=>{
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(Register)