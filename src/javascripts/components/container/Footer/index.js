import React, { Component } from 'react'
import {Link} from 'react-router'
import './index.scss'

class AppFooter extends Component {
    constructor (props) {
        super(props)
        this.state = {
            activeShow:'1'
        }
    }
    isShow (id) {
        this.setState({activeShow:id})
    }
    render () {
        let {navs} = this.props
        return (
            <div className="app-footer">
            {
                navs.map(item=>
                <Link onClick={this.isShow.bind(this,item.id)} to={{
                    pathname:item.pathname
                }} key={item.id} className={this.state.activeShow==item.id?'list active':'list'}>
                        <i className={item.icon}></i>
                        <span>{item.title}</span>
                </Link>)
            }
            </div>
        )
    }
}
AppFooter.defaultProps = {
    navs:[
        {id:1,title:'首页',pathname:'/home',icon:"fa fa-home"},
        {id:2,title:'分类',pathname:'/categorylist',icon:'fa fa-th-large'},
        {id:3,title:'购物车',pathname:'/mycart',icon:'fa fa-cart-plus'},
        {id:4,title:'我的',pathname:'/mine',icon:'fa fa-user-o'},
    ]
}

export default AppFooter