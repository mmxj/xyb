import React,{Component} from 'react';
import Ajax from '@/services';
import cookie from 'react-cookies';
import './index.less';
export default class SocialAccount extends Component{
    constructor(props){
        super(props)
        this.state={
            data:{
                mobile:'',
                account:'',
            }
        }
    }
    repliceNum(num){

        if(num.length===11){
            var m =num.substring(3,num.length-4).replace(/./g,"*");
            return num.substr(0,3)+m+num.substr(num.length-4);
        }else{
            var m =num.substring(4,num.length-4).replace(/./g,"*");
            return num.substr(0,4)+m+num.substr(num.length-4);
        }
    }
    componentDidMount=()=>{
        Ajax({
            router:'/user/card/bind/get',
            session:true,
            data:{
                userId:cookie.load('userId'),
                cardType:["1"]
            },
            callback:(data)=>{
                if(data.rows.length>0){
                    console.log(data.rows[0]);
                    this.setState({
                        data:data.rows[0]
                    })
                }

            }
        })
    }
    render(){
        return(
            <div id="SocialAccount">
                <div className="list-wrap">
                    <div className="list">
                        <span>账户：{this.repliceNum(this.state.data.account)}</span>
                    </div>
                    <div className="list">
                        <span>姓名：{this.state.data.userName}({this.state.data.relationTypeName})</span>
                    </div>
                    <div className="list">
                        <span>手机：{this.repliceNum(this.state.data.mobile)}</span>
                    </div>
                    <div className="list">
                        <span>银行：{this.state.data.bankName}</span>
                    </div>
                </div>
            </div>
        )
    }
}