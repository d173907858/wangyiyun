import React, { Component } from 'react'
import './index.scss'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../../store/Login/actionCreators'

class Mine extends Component {
    constructor (props) {
        super(props)
        this.signOut = this.signOut.bind(this)
        console.log(this.props)
    }
    signOut () {
        this.props.actions.removeUserInfo()
        console.log(this.props)
    }
    render () {
        let {list,tabs,textlist,users} = this.props
        return (
            <div className="my">
                <div className="myIn">
                    <div className="header">
                        <div className="headerImg">
                            <img alt="用户头像" src="http://img02.yiguo.com/e/web/150703/00781/140145/no-pic.jpg"/>
                            {
                                users.isOut?<Link className="name">{users.userInfo[0].user_name}</Link>
                                :<Link to={{pathname:'/login'}} className="name">登录/注册</Link>
                            }
                        </div>
                        <i onClick={this.signOut} className="setting fa fa-sign-out"></i>
                    </div>
                    <div className="account">
                        {
                            list.map(item=><p key={item.id} className="list">
                            <span className="num">-</span>
                            <span className="txt">{item.title}</span>
                        </p>)
                        }
                    </div>
                    <div className="listTab">
                        <ul className="line-bottom">
                        {
                            tabs.map(item=><li key={item.id}>
                                <a>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </a>
                            </li>)
                        }
                            
                        </ul>
                    </div>
                    <div className="textList">
                    {
                        textlist.map(item=><div key={item.id} className="list line-bottom">
                            
                                <i className={item.icon}></i>
                                {item.title}
                        </div>)
                    }
                    </div>
                </div>
            </div>
        )
    }
}

Mine.defaultProps = {
    list :[
        {id:1,title:'账户余额'},
        {id:2,title:'优惠券'},
        {id:3,title:'悠币'}
    ],
    tabs:[
        {id:1,title:'待支付',icon:'fa fa-credit-card'},
        {id:2,title:'待收货',icon:'fa fa-truck'},
        {id:3,title:'评价送悠币',icon:'fa fa-envelope-o'},
        {id:4,title:'在线退换货',icon:'fa fa-compress'},
        {id:5,title:'全部订单',icon:'fa fa-calendar-check-o'}                                
    ],
    textlist:[
        {id:1,title:'收货地址',icon:'fa fa-address-book-o'},
        {id:2,title:'充值卡',icon:'fa fa-id-card'},
        {id:3,title:'礼品兑换券',icon:'fa fa-gift'},
        {id:4,title:'帮助中心',icon:'fa fa-question-circle-o'},
        {id:5,title:'客服电话',icon:'fa fa-user-circle-o'}       
    ]
}
export default connect(state=>{
    console.log(state.Login)
    return {
        users:state.Login
    }
    
},(dispatch)=>{
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(Mine)