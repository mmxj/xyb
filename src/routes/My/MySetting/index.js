/**
 * Created by 银信数据科技 on 2018/7/2.
 */
import React,{Component} from 'react';
import {Button,Modal} from 'antd-mobile';
import cookie from 'react-cookies';
import './index.less';
const alert=Modal.alert;
export default class MySetting extends Component {
    SignOut=()=>{
        alert("是否退出乡银保？","",[
            {text:'确认',onPress:()=>{
                cookie.remove('session');
                cookie.remove('userId');
                cookie.remove('userName');
                alert('退出成功');
            }},
            {text:'取消',onPress:()=>{}}
        ])
    }
    render(){
        return (
            <div id="MySetting">
                <div className="list-wrap">
                    <div className="list-title clearfix" onClick={()=>{this.props.history.push('mysetting/changepassword')} }>登录密码修改
                        <svg key="2" className="icon2" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-2">
                            </use>
                         </svg>
                    </div>
                    <div className="list-title">社保卡绑定
                        <svg key="2" className="icon2" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-2">
                            </use>
                        </svg>
                    </div>
                </div>
                <Button className="leave-button" onClick={()=>{
                    this.SignOut()
                }}>退出登录</Button>
            </div>
        )
    }
}