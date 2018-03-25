import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import registerServiceWorker from './registerServiceWorker';
import {Router,browserHistory} from 'react-router'
import routeConfig from './router'
import store from './store'
import {Provider} from 'react-redux'


ReactDOM.render( 
<Provider store={store}>
<Router routes={routeConfig} history={browserHistory}></Router>
</Provider>    
 ,document.getElementById('root'));
registerServiceWorker();
