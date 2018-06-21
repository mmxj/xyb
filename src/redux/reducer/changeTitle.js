/**
 * Created by 银信数据科技 on 2018/6/20.
 */
const defaultState={
    title:'乡银保'
};
const changeTitle =function (state=defaultState,action){
    switch(action.type){
        case 'TITLE':
            return Object.assign({},state,action)
        default:
            return state;
    }
}
export default changeTitle