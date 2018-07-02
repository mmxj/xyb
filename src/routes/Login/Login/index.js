import React,{Component} from 'react';
import {InputItem,Button } from 'antd-mobile';
import './index.less';
import md5 from 'js-md5';
import {removespace} from '@/unit';
import Ajax from '@/services';
import cookie from 'react-cookies';
import {connect} from 'react-redux';
import {loginStatus} from '@/redux/actions'
class Login extends Component{
    constructor(props){
        super(props);
        this.keydown=this.keydown.bind(this)
    }
    keydown(event,account){
       if(event.keyCode==='13'||event.keyCode===13){
            if(account){
                this.password.focus()
            }
        }

    }
    userLogin(){
        if(this.password.state.value===''){
            // alert('请输入密码')
        }
        let account=removespace(this.account.state.value);
        let password=md5(this.password.state.value).toUpperCase();
        let time=new Date();
        time.setMinutes(time.getMinutes()+1000);
        Ajax(
            {
                router:'/user/app/login',
                data:{
                    deviceType:1,
                    loginName:account,
                    password:password,
                },
                callback:(data)=>{
                    cookie.save('session',data.session,{expires:time});
                    cookie.save('userId',data.userId,{expires:time});
                    cookie.save('userName',data.userName,{expires:time});
                    this.props.loginStatus(true);
                    // this.props.history.push(this.props.hash.split('#')[1]);
                    window.history.back()
                }
            }
        )
    }
    goroute(url){
        this.props.history.push(url)
    }
    render(){

        return (
            <div id="Login">
               <div className="logo">
                   <svg key="55" className="icon" aria-hidden="true">
                       <use xlinkHref="#icon-xiangyinbaoicon-55"></use>
                   </svg>
                   <p>欢迎使用乡银保</p>
               </div>
                <div className="box-wrap">
                        <div className="input-wrap">
                            <InputItem
                                placeholder="请输入手机号"
                                clear
                                type="number"
                                onKeyDown={(event)=>{
                                    this.keydown(event,'account')
                                }}
                                ref={el => this.account =el}
                                maxLength={11}
                                onTouchStart={()=>{return false}}
                            >
                                <svg key="52" className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-xiangyinbaoicon-52"></use>
                                </svg>
                            </InputItem>
                        </div>
                        <div className="input-wrap">
                            <InputItem
                                placeholder="请输入密码"
                                type="password"
                                ref={el => this.password =el}
                                clear
                                onTouchStart={()=>{return false}}
                            >
                                <svg key="50" className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-xiangyinbaoicon-50"></use>
                                </svg>
                            </InputItem>
                        </div>
                    <div className="button-wrap clearfix">
                        <Button type="primary" className="button" onClick={()=>{this.userLogin()}}>登录</Button>
                        <span className="forget" onClick={()=>{this.goroute('password')}}>忘记密码</span>
                        <span className="signin" onClick={()=>{this.goroute('signin')}}>注册</span>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        hash:state.hash,
        status:state.loginstatus
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginStatus:(config) => {
            dispatch(loginStatus(config))
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)