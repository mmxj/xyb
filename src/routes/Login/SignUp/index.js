/**
 * Created by 银信数据科技 on 2018/6/22.
 */
import React,{Component} from 'react';
import {InputItem,Button,Modal } from 'antd-mobile';
import {removespace} from '@/unit';
import Ajax from '@/services';
import md5 from 'js-md5'
import './index.less'
const alert=Modal.alert;
export default class SignIn extends Component{
    constructor(props){
      super(props)
        this.state={
          sendsms:true,
          sendclass:"",  //no-use 不能使用时的样式，
          buttonConnent:'获取验证码',
          validateCodeId:null
        }
    }
    getsms(){
        let phone=removespace(this.phone.state.value);
        if(phone.length!==11){
            alert('请输入正确的手机号');
            return
        }
        if(phone!==''){
            if(this.state.sendsms){//限制验证码60秒只能点一次
                this.setState({
                    sendsms:false
                })
                var timer=60;
                this.setState({
                    buttonConnent:timer+'秒之后再试',
                    sendclass:"no-use",
                })
                timer--;
                var time=setInterval(()=>{
                    if(timer>0){
                        this.setState({
                            buttonConnent:timer+'秒之后再试',
                            sendclass:"no-use",
                        })
                    }else{
                        this.setState({
                            buttonConnent:'获取验证码',
                            sendclass:"",
                        })
                        this.setState({
                            sendsms:true
                        })
                        clearInterval(time);
                    }
                    timer--
                },1000)
                Ajax({
                    router:'/base/validatecode/sms/get',
                    data:{
                        deviceType:1,
                        validateCodeType:2,
                        mobile:phone
                    },
                    callback:(data)=>{
                        this.setState(
                            {
                                validateCodeId:data.validateCodeId
                            }
                        )


                    }
                })
            }
        }else{
            alert('请填写手机号')
        }
    }
    signup(){
        let phone=removespace(this.phone.state.value);
        let password=this.password.state.value;
        let passwordagain=this.passwordagain.state.value;
        let validateCode=this.validateCode.state.value;
        if(phone===null||phone===''){
            alert('请填写手机号')
            return
        }
        if(password===null||password===''){
            alert('请填写密码')
            return
        }
        if(validateCode===null||validateCode===''){
            alert('请填写验证码')
            return
        }
        if(password===passwordagain){
            Ajax({
                router:'/user/app/register',
                data:{
                    deviceType:1,
                    password:md5(password).toUpperCase(),
                    validateCodeId:this.state.validateCodeId,
                    validateCode:validateCode,
                    loginMobile:phone
                },
                callback:(data)=>{

                        alert('账号新建成功','',[{
                            text:'确定',onPress:()=> window.history.back()
                        }]);



                }
            })
        }else{
            alert('两次输入的密码不一致')
            return
        }

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
                            ref={el => this.phone =el}
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
                            type="password"
                            placeholder="请输入6~16位字母或数字的密码"
                            clear
                            ref={el => this.password =el}
                            onTouchStart={()=>{return false}}
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
                            ref={el => this.passwordagain =el}
                            onTouchStart={()=>{return false}}
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
                            ref={el => this.validateCode =el}
                            onTouchStart={()=>{return false}}
                        >
                            <svg key="51" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-51"></use>
                            </svg>
                        </InputItem>

                    </div>
                    <Button className={`code-button ${this.state.sendclass}`}  onClick={()=>{this.getsms()}}>
                        {this.state.buttonConnent}
                    </Button>

                    <Button type="primary" className="signin-button" onClick={()=>{this.signup()}}>立即注册</Button>
                </div>

            </div>
        )
    }
}