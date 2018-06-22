/**
 * Created by 银信数据科技 on 2018/6/22.
 */
import React,{Component} from 'react';
import {InputItem,Button } from 'antd-mobile';
import './index.less'
export default class SignIn extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="SignIn">
                <div className="box-wrap">
                    <div className="input-wrap">
                        <InputItem
                            type="number"
                            placeholder="请输入手机号"
                            clear

                            value={this.account}
                        >
                            <svg key="52" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-52"></use>
                            </svg>
                        </InputItem>
                    </div>
                    <div className="input-wrap">
                        <InputItem
                            type="password"
                            placeholder="请输入6~16位字母或数字的密码"
                            clear

                            value={this.password}
                        >
                            <svg key="50" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-50"></use>
                            </svg>
                        </InputItem>
                    </div>
                    <div className="input-wrap">
                        <InputItem
                            type="password"
                            placeholder="请输入6~16位字母或数字的密码"
                            clear
                            value={this.passwordagin}
                        >
                            <svg key="50" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-50"></use>
                            </svg>
                        </InputItem>
                    </div>
                    <div className="input-wrap code">
                        <InputItem
                            type="number"
                            placeholder="请输入验证码"
                            clear

                            value={this.code}
                        >
                            <svg key="51" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-51"></use>
                            </svg>
                        </InputItem>

                    </div>
                    <Button className="code-button">
                        获取验证码
                    </Button>

                    <Button type="primary" className="signin-button">立即注册</Button>
                </div>

            </div>
        )
    }
}