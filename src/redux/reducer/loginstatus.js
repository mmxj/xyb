/**
 * Created by 银信数据科技 on 2018/6/25.
 */
const loginstatus = function (state=false,action){
    switch (action.type){
        case 'LOGINSTATUS':
            return action.status
        default:
            return state
    }
}
export default loginstatus