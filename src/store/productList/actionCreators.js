import axios from 'axios'
import {
    GET_PRODUCT_LIST,GET_GOODS,ALL_INFO
} from './const'
let actionCreators = {
    getProductList (classid2,classid3,type) {
        return (dispatch) => {
            axios.get('tt/v3/product/sub_category_list',{
                params:{
                    class2_id:classid2,
                    class3_id:classid3,
                    store_id_list: 3,
                    sort_type: type?type:1,
                    tms_region_type: 1
                }
            }).then(res=>{
                dispatch({type:GET_PRODUCT_LIST,productList:res.data.data})
                // console.log(res.data.data)
            })
        }
    },
    getGoods (id,img,name,price,num) {
        let goods = {
            goodId:id,goodImage:img,goodName:name,goodPrice:price,goodNum:num
        }
        return (dispatch) => {
            dispatch({type:GET_GOODS,carts:goods})          
        }
    }
}
export default actionCreators