/**
 * Created by 银信数据科技 on 2018/6/19.
 */
import {combineReducers} from 'redux';
import changeTitle from './changeTitle'
import routelist from './routelist'

export default combineReducers({
    changeTitle,
    routelist
})