import React, { Component } from 'react'
import './index.scss'

class CategoryNav extends Component {
    constructor (props) {
        super(props)
        this.state={
            isActive:'303'
        }
    }
    tabtoggle (id) {
       this.setState({isActive:id})
       this.props.listShow(id)
    }
    render () {
        let classOneGroup = this.props.classOneGroup
        return (
            <div className="nav">
                <ul className="navList">
                {
                    classOneGroup.length>0?this.props.classOneGroup.map(item=><li onClick={this.tabtoggle.bind(this,item.id)} key={item.id} className={this.state.isActive==item.id?'active':''}>{item.name}</li>):''
                }
                </ul>
            </div>
        )
    }
}
export default CategoryNav
