//储存路由变化
 const hash=function (state='#/',action) {
    switch (action.type){
        case 'SETLASTURL':
            return action.hash
        default:
            return state
    }
}
export default hash