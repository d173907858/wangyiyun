import React,{ Component } from 'react'
import {Link} from 'react-router'
import './index.scss'

class ListContent extends Component {
    render () {
        let class3Group  = this.props.childrenList[0].class3Group
        return (
            <div className="list-content">
                <div className="commodityBox">
                {
                    class3Group.length>0?class3Group.map(item=><Link key={item.id} to={{pathname:'/productList',query:{class2_id:item.class2Id,class3_id:item.id}}} className="commodityList">
                        <img src={item.class_photo}/>
                        { item.name }
                     </Link>):''
                }
                </div>
            </div>
        )
        
    }
}

export default ListContent