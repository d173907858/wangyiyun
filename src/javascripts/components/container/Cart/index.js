import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import actionCreators from '../../../../store/categorylist/actionCreators'
import './index.scss'
import CartContent from './cartContent'

class ShopCart extends Component {
    componentWillMount () {
        this.props.actions.getCartData()
        console.log(this.props,'555')
    }
    render () {
        return (
            <div className="shop-car">
                <div className="cart-login">
                    登录可同步购物车内商品
                    <Link className="line-all">登录</Link>
                </div>
                <div className="cart-express">
                    全场满100元包邮，还差
                    <span className="red">100.00</span>
                    元包邮
                </div>
                <CartContent></CartContent>
            </div>
        )
    }
}

export default connect(state=>{
    return {
        shopCart:state.shopCart
    }
},(dispatch)=>{
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(ShopCart)