import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actionCreators from '../../../../store/categorylist/actionCreators'
import './index.scss'
import CategoryNav from './Nav'
import ListContent from './ListContent'

class CategoryList extends Component {
    constructor (props) {
        super(props)
        this.listShow=this.listShow.bind(this)
    }
    componentWillMount () {
        this.props.actions.getCategoryData()
    }
    listShow (id) {
        this.props.actions.getCategoryData(id)
    }
    render () {
        // console.log(this.props)
        let {categoryList} = this.props.categoryList
        let {classOneGroup,childrenList} = categoryList
        return (
            <div className="main-box category">
                <CategoryNav listShow={this.listShow} classOneGroup={classOneGroup}/>
                {
                    childrenList.length>0?<ListContent childrenList={childrenList}/>:''
                }
            </div>
        )
    }
}
export default connect(state=>{
    return {
        categoryList:state.categorylist
    }
},(dispatch)=>{
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(CategoryList)
