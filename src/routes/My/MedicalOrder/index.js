/**
 * Created by 银信数据科技 on 2018/7/4.
 */
import React,{Component} from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
export default class MediacalOrder extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        axios.get('http://www.emtsos.com/emMiniApi.do?method=getOrderList&mobile='+cookie.load('userName')).then((data)=>{
           let res=data.data;
           if(res.ret===1){
             console.log(console.log(res.data))
           }}
            )
    }
    render(){
        return (
            <div id="MediacalOrder">
                医疗转运订单
            </div>
        )
    }
}