import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import registerServiceWorker from './registerServiceWorker';
import {Router,hashHistory} from 'react-router'
import routeConfig from './router'


ReactDOM.render( 

<Router routes={routeConfig} history={hashHistory}></Router>,
    
    document.getElementById('root'));
registerServiceWorker();
