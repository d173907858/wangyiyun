import React,{Component} from 'react'
import './index.scss'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router'
import actionCreators from '../../../../store/productList/actionCreators'

class ProductList extends Component {
    constructor (props) {
        super(props)
        this.state={
            listId:'1',
            info:null
        }
        this.allInfo.bind(this)
    }
    productSort (type)  {
        let Code = this.props.location.query
        let {class2_id,class3_id} = Code
        this.props.actions.getProductList(class2_id,class3_id,type)
        this.setState({listId:type})
    }
    addCart (id,img,name,price,num) {
        let info = {all_num:0,all_price:0}
        this.props.actions.getGoods(id,img,name,price,num)
        console.log(this.props,'666')
        this.allInfo(info)
        this.setState({info:info})
    }
    allInfo (info) {
        let goods = this.props.productList.carts
        goods.forEach(good=>{
            info.all_num += good.goodNum
            info.all_price += good.goodPrice
        })
        return info
    }
    componentWillMount () {
        let Code = this.props.location.query
        let {class2_id,class3_id} = Code
        this.props.actions.getProductList(class2_id,class3_id)
    }
    render () {
        // console.log(this.props,'444')
        let productGroup = this.props.productList.productList.productGroup
        // console.log(productGroup)
        return (
            <div className="product-list">
                <header>
                    <div className="navList line-bottom">
                        <div className={this.state.listId==1?"list active":"list"} onClick={this.productSort.bind(this,1)}>综合</div>
                        <div className={this.state.listId==2?"list active":"list"} onClick={this.productSort.bind(this,2)}>销量</div>
                        <div className={this.state.listId==3?"list active":"list"} onClick={this.productSort.bind(this,3)}>价格<i className="fa fa-sort sort"></i></div>
                    </div>
                </header>
                <div className="pruductShow">
                {
                    productGroup?productGroup.map(item=><div key={item.id} className="productContent line-bottom">
                        <div className="img">
                            <img src={item.photo}/>
                        </div>
                        <div className="inforPro">
                            <p className="title">{item.product_name}</p>
                            <p className="txt">{item.product_desc}</p>
                            <p className="price">
                                <span className="priceRed">¥{item.price}</span>
                                <span className="standard">{item.volume}</span>
                                <i onClick={this.addCart.bind(this,item.id,item.photo,item.product_name,item.price,1)} className="fa fa-plus-square-o addcar"></i>
                            </p>
                        </div>
                    </div>):''
                }
                    
                </div>
                <div className="option">
                    <Link className="car" to={{pathname:"/mycart",params:{info:this.state.info}}}>
                    {
                        this.state.info?<i>{this.state.info.all_num}</i>:''
                    }
                    </Link>
                </div>
            </div>
        )
    }
}

export default connect(state=>{
    return {
        productList:state.productList
    }
},(dispatch)=>{
    return {
        actions:bindActionCreators(actionCreators,dispatch)
    }
})(ProductList)
