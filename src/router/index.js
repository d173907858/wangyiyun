import App from '../javascripts/App'
import CategoryList from '../javascripts/components/container/CategoryList'
import MyCart from '../javascripts/components/container/Cart'
import Mine from '../javascripts/components/container/Mine'
import Login from '../javascripts/components/container/Login'
import Register from '../javascripts/components/container/Register'
import ProductList from '../javascripts/components/container/ProductList'


// import {hashHistory} from 'react-router'

const routeConfig = [
    { path: '/',
      component: App,
      childRoutes: [
        {path:'categorylist',component:CategoryList},
        {path:'mycart',component:MyCart},
        {path:'mine',component:Mine}
      ]
    },
    {path:'login',component:Login},
    {path:'register',component:Register},
    {path:'productList',component:ProductList}
  ]

export default routeConfig