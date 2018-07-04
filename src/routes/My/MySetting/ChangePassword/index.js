/**
 * Created by 银信数据科技 on 2018/7/2.
 */
import React,{Component} from 'react';
import {Button,Toast,Modal} from 'antd-mobile';
import md5 from 'js-md5';
import Ajax from '@/services'
import './index.less';
const alert =Modal.alert;
export default class ChangePassword extends Component{
    updatePassword(){
        var oldPassword=this.oldPassword.value;
        var newPassword=this.newPassword.value;
        var checkPassword=this.checkPassword.value;
        if(oldPassword===null||oldPassword===''){
            Toast.info('请输入旧密码');
            return
        }
        var reg = /^[0-9a-zA-Z]+$/;

        if(!reg.test(newPassword)){
            Toast.info('密码只能是数字或英文');
            return
        }else if(newPassword.length<6){
            Toast.info('密码长度必须大于6');
            return
        }
        if(newPassword===null||newPassword===''){
            Toast.info('请输入新密码');
            return
        }
        if(checkPassword===null||checkPassword===''){
            Toast.info('请确认新密码');
            return
        }
        if(newPassword!==checkPassword){
            Toast.info('两次输入的密码不一致');
            return
        }
        Ajax({
            router:'/user/app/password/update',
            session:true,
            data:{
                passwordOld:md5(oldPassword).toUpperCase(),
                passwordNew:md5(newPassword).toUpperCase()
            },
            callback:(data)=>{
                alert('修改成功');
                this.oldPassword.value=null;
                this.newPassword.value=null;
                this.checkPassword.value=null;
            }
        })
    }
    render(){
        return (
            <div id="ChangePassword">
                <div className="input-wrap">
                    <div className="input-list">
                        <span>输入旧密码</span>
                        <input type="password" ref={el=>this.oldPassword=el}/>
                    </div>
                    <div className="input-list">
                        <span>输入新密码</span>
                        <input type="password"  ref={el=>this.newPassword=el}/>
                    </div>
                    <div className="input-list">
                        <span>确认新密码</span>
                        <input type="password" ref={el=>this.checkPassword=el}/>
                    </div>
                </div>
                <Button className="saveButton" type="primary" onClick={()=>{
                    this.updatePassword()
                }}>保存</Button>
            </div>
        )
    }
}