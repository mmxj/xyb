import React from 'react';
import ReactDOM from 'react-dom';
import RouterWrap from './RouterWrap';
import store from './redux'
import { Provider } from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
require('./assets/iconfont/iconfont');
ReactDOM.render(
    <Provider store={store} >
        <RouterWrap />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
