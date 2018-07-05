/**
 * Created by 银信数据科技 on 2018/7/5.
 */
import React,{Component} from 'react';
import {Button,Modal} from 'antd-mobile';
import './index.less';
const alert=Modal.alert;
export default class SocialBalance extends Component{
    render() {
        return (
            <div id="SocialBalance">
                <div className="title">您的社保余额信息</div>
                <div className="form-wrap">
                    <div className="form-list">
                        <span>社保卡号</span>
                        <input type="text" placeholder="请输入您的社保卡号"/>
                    </div>
                    <div className="button-wrap">
                        <Button type="primary" onClick={()=>{alert('栏目正在建设中')}}>查询</Button>
                    </div>
                </div>
            </div>
        )
    }
}