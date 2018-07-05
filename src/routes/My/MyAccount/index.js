/**
 * Created by 银信数据科技 on 2018/6/26.
 */
import React,{Component} from 'react';
import Ajax from '@/services';
import './index.less';
import cookie from 'react-cookies';
class MyAccount extends Component {
    constructor(props){
        super(props);
        this.getUser=this.getUser.bind(this);
        this.routeGo=this.routeGo.bind(this);
        this.getUser();
        this.state={
            phone:'无账号',
            eamil:'未设置',
            address:'未设置',
            data:null
        }
    }
    getUser(){
        var userId=cookie.load('userId');
        Ajax({
            router:'/user/get',
            session:true,
            data:{
                id:userId
            },
            callback:(data)=>{
                this.setState({
                    phone:data.moblie,
                    eamil:data.email,
                    address:data.address,
                    data:data
                })
            }
        })
    }
    phone(num){

        if(num.length===11){
            var m =num.substring(3,num.length-4).replace(/./g,"*");
            return num.substr(0,3)+m+num.substr(num.length-4);
        }else{
            return num
        }
    }
    routeGo(url){
        this.props.history.replace({pathname:url, state:{data:this.state.data}})
    }
    cardName(type){
        if(type===1){return "社保卡"}else if(type===3){return "银联卡"}else{return "其他卡"}
    }
    render() {
        return (
            <div id="MyAccount">
                <div className="box-wrap">
                    <div className="list clearfix">
                        <span>账户</span>
                        <span className="text-right mobile">{this.phone(this.state.phone)}</span>
                    </div>
                    <div className="list clearfix">
                        <span>邮箱</span>
                        <span className="text-right"  onClick={()=>{this.routeGo('myaccount/emailupdate')}} >
                            {this.state.eamil?this.state.eamil:'未设置'}
                            <svg className="icon" aria-hidden="true">
                              <use xlinkHref="#icon-xiangyinbaoicon-2"></use>
                            </svg>
                        </span>
                    </div>
                    <div className="list clearfix">
                        <span>地址</span>
                        <span className="text-right" onClick={()=>{ this.routeGo('myaccount/addressupdate') }}>
                                 {this.state.address?this.state.address:'未设置'}
                            <svg className="icon" aria-hidden="true">
                              <use xlinkHref="#icon-xiangyinbaoicon-2"></use>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default MyAccount