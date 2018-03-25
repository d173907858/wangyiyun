import React, { Component } from 'react'
import './index.scss'
import {Link} from 'react-router'
class CartContent extends Component {
 
    render () {
        return (
            <div className="cart-wrap">
                <div className="goods">
                    <div className="group">
                        <div className="one">
                            <div className="check"><i className="fa fa-circle-thin"></i></div>
                            <div className="img"><img src="http://img09.yiguoimg.com/d/items/2018/180302/9288719818663010_300.jpg"/></div>
                            <div className="text">
                                <h2 className="elli2">希腊绿奇异果10个85g以上/个</h2>
                                <p className="red">￥<b>33.8</b></p>
                            </div>
                            <div className="del"><i className="fa fa-trash-o"></i></div>
                            <div className="num">
                                <span className="cut line-all">-</span>
                                <span className="inp">1</span>
                                <span className="add line-all">+</span>                   
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nogoods">
                    <i className=" fa fa-shopping-cart icon"></i>
                    <p>购物车空空的，快去逛逛吧</p>
                    <div className="btn">
                        <Link>去逛逛</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default CartContent