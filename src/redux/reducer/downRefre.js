/**
 * Created by 银信数据科技 on 2018/6/29.
 */
const defaultstate=function(){
    console.log('拉到底了')
}
const downRefre =function (state=defaultstate,action){
    switch(action.type){
        case 'DOWNREFRE':
            return action.fn;
        default:
            return state;
    }
}
export default downRefre