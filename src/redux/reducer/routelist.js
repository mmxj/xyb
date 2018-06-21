/**
 * Created by 银信数据科技 on 2018/6/20.
 */
const routelist =function (state={

},action){
    switch(action.type){
        case 'SETROUTE':
            var route=Object.assign({},state,action.config);
            return route
        default:
            return state;
    }
}
export default routelist