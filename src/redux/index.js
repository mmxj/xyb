/**
 * Created by 银信数据科技 on 2018/6/19.
 */
// import reducer from './reducer'
 import reducer from './reducer'
var  redux = require('redux');
var createStore = redux.createStore;
const store = createStore(reducer);
export default store;