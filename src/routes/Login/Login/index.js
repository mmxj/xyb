import React,{Component} from 'react';
import {InputItem,Button } from 'antd-mobile';
import './index.less';
export default class Login extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    keydown(event,account){
        if(event.keyCode==='13'){
            if(account){
                this.password.focus()
            }
        }

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
                                type="number"
                                placeholder="请输入手机号"
                                clear
                                onKeyDown={(event)=>{
                                    this.keydown(event,'account')
                                }}
                                value={this.account}
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
                                value={this.passwords}
                            >
                                <svg key="50" className="icon" aria-hidden="true">
                                    <use xlinkHref="#icon-xiangyinbaoicon-50"></use>
                                </svg>
                            </InputItem>
                        </div>
                    <div className="button-wrap clearfix">
                        <Button type="primary" className="button">登录</Button>
                        <span className="forget">忘记密码</span>
                        <span className="signin" onClick={()=>{this.goroute('signin')}}>注册</span>
                    </div>
                </div>

            </div>
        )
    }
}