/**
 * Created by 银信数据科技 on 2018/7/4.
 */
import React,{Component} from 'react';
import {Button,Modal} from 'antd-mobile';
import './index.less';
const alert=Modal.alert;
export default class Basic extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="SocialBasic">
                <div className="title">您的参保信息</div>
                <div className="form-wrap">
                    <div className="form-list">
                        <span>姓名</span>
                        <input type="text" placeholder="请输入您的姓名"/>
                    </div>
                    <div className="form-list">
                        <span>身份证号</span>
                        <input type="text" placeholder="请输入您的身份证号"/>
                    </div>
                    <div className="button-wrap">
                        <Button type="primary" onClick={()=>{alert('栏目正在建设中')}}>查询</Button>
                    </div>
                </div>
            </div>
        )
    }
}