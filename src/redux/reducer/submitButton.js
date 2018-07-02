/**
 * Created by 银信数据科技 on 2018/6/26.
 */
const defaultstate=function(){
    console.log('点击了')
}
const submitButton =function (state=defaultstate,action){
    switch(action.type){
        case 'SUBMIT':
            return action.fn;
        default:
            return state;
    }
}
export default submitButton