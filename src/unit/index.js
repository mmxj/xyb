/**
 * Created by 银信数据科技 on 2018/6/25.
 */
export const removespace=function(number){
    let num = number.split(' ');
    return num.join('')

}
export const dateformat= function(time){
    var timeArr = time.split('/');
    for(var i in time){
        if(timeArr[i]<10){
            timeArr[i]='0'+timeArr[i]
        }
    }
    return timeArr.join('/')
}