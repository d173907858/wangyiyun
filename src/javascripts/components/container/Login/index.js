import React,{Component} from 'react'
import './index.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../../store/Login/actionCreators'
import {Link} from 'react-router'
import { Toast } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'

class Login extends Component {
    constructor (props) {
        super(props)
        this.login = this.login.bind(this)
    }
    login () {
        let user_name =this.username.value
        let user_pass = this.password.value
        this.props.actions.getUserInfo({user_name,user_pass},(result)=>{
            if(!result){
                Toast.fail('用户名或密码不匹配 登录失败')
            }else{
                Toast.success('登录成功')
                this.props.history.replace('/mine')
            }
        })
    }
    render () {
        return (
            <div className="wrap">
                <form>
                    <div className="input-item">
                        <div className="item-list">
                            <i className="fa fa-user-o"></i>
                            <input type="text" id="username" ref={username=>this.username=username} placeholder="请输入您的用户名"/>
                        </div>
                        <div className="item-list">
                            <i className="fa fa-key"></i>
                            <input type="password" id="password" ref={password=>this.password=password} placeholder="请输入您的密码"/>
                        </div>
                        {/* <div className="item-list">
                            <input type="text" className="identifyCode" placeholder="请输入验证码"/>
                            <img src="https://h5login.yiguo.com/Ajax/VCodePic.ashx?r=131661003285135188"/>
                        </div> */}
                    </div>
                    <div className="login-option">
                        <span className="retrieve_password" id="btnForgetPwd">忘记密码?</span>
                    </div>
                    <div className="btn-login">
                        <button className="btn-green" type="button" onClick={this.login}>登录</button>
                        <Link className="btn-white" to={{pathname:'/register'}}>立即注册</Link>
                    </div>
                    <div className="login-other">
                        <dl>
                            <dt>----------- 合作账号登录 -----------</dt>
                            <dd>
                                <span className="qq"></span>
                                <span className="weibo"></span>
                            </dd>
                        </dl>
                    </div>
                </form>
                <div className="bottomcopyright">
                    <em className="logo"></em>
                </div>
            </div>
        )
    }
}

export default connect(state=>{
    return {
        userInfo:state.userInfo
    }
},(dispatch)=>{
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(Login)