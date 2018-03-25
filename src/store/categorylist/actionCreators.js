import axios from 'axios'
import {
    SET_CATEGORY_DATA,SET_CART_DATA
} from './const'
let actionCreators = {
    getCategoryData (id) {
        return (dispatch) => {
            axios.get('tt/v3/product/category_list',{
                params:{store_id_list: 3,class_id:id?id:''}
                
            }).then(res=>{
                    dispatch({type:SET_CATEGORY_DATA,categoryList:res.data.data})
                    // console.log(res.data.data,'000')
            })
        }
    }
}
export default actionCreators