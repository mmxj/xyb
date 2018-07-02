/**
 * Created by 银信数据科技 on 2018/6/19.
 */
// let nextId=0;
// dispatch(参数) 引用
// export const addTodo = (text) =>{
//     return {
//         type:'ADD_TODO',
//         id:nextId++,
//         text
//     }
// }
export const changeTitle = (text)=> {
    return {
        type:'TITLE',
        title:text
    }
}
export const setRoute = (config) =>{
    return {
        type:'SETROUTE',
        config:config
    }
}
export const setHash = (config) => {
    return {
        type : 'SETLASTURL',
        hash:config
    }
}
export const loginStatus = (config) =>{
    return {
        type : 'LOGINSTATUS',
        status:config
    }
}
export const submitButton = (config) => {
    return {
        type:'SUBMIT',
        fn:config
    }
}
export const downRefre = ( config) =>{
    return {
        type:'DOWNREFRE',
        fn:config
    }
}