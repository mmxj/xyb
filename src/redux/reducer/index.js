/**
 * Created by 银信数据科技 on 2018/6/19.
 */
import {combineReducers} from 'redux';
import changeTitle from './changeTitle';
import routelist from './routelist';
import hash from './hash.js';
import loginstatus from './loginstatus'
import submitButton from './submitButton'
import downRefre from './downRefre'
export default combineReducers({
    changeTitle,
    hash,
    routelist,
    loginstatus,
    submitButton,
    downRefre
})