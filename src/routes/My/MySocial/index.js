import React,{Component} from 'react';
import Ajax from '@/services';
import cookie from 'react-cookies';
import './index.less';
export default class MySocial extends Component{
    constructor(){
        super();
        this.state={
            data:{
                idCardName:'未知用户',
                moblie:'无',
            }
        }
    }
    componentDidMount=()=>{
        Ajax({
            router:'/user/get',
            session:true,
            data:{
                id:cookie.load('userId')
            },
            callback:(data)=>{
                console.log(data);
                this.setState({
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
    render(){
        return (
            <div id="MySocial">
                <div className="list-top">
                    <div className="list-left">
                        <img className="userLogo" src={require('@/assets/img/userface.png')} alt="头像"/>
                        <div className="userInform">
                            <p>{this.state.data.idCardName}</p>
                            <p>{this.phone(this.state.data.moblie)}</p>
                        </div>
                    </div>
                    <div className="list-right clearfix">
                        {
                            this.state.data.isRealnameValidated===1?
                             <div className="become" >
                                    社保用户
                             </div>:
                             <div className="become">
                                 申请成为社保用户
                             </div>
                        }
                    </div>
                </div>
                <div className="list-bottom">
                    <div className="list clearfix" onClick={()=>{this.state.data.isRealnameValidated===1?this.props.history.push('mysocial/socialaccount'):alert('请先绑定社保卡')}}>
                        社保账户
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-2"></use>
                        </svg>
                    </div>
                    <div className="list clearfix" onClick={()=>{this.props.history.push('mysocial/socialfamily')}}>
                        我的家人
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-2"></use>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}