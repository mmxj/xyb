import React,{Component} from 'react';
import {List,Picker,Button,Modal} from 'antd-mobile'
import './index.less';
const alert=Modal.alert;
export default class AddFamily extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {value:1,label:'父亲'},
                {value:2,label:'母亲'},
                {value:3,label:'丈夫'},
                {value:4,label:'妻子'},
                {value:5,label:'儿子'},
                {value:6,label:'女儿'},
                {value:7,label:'爷爷'},
                {value:8,label:'奶奶'},
                {value:9,label:'本人'},
            ],
            sValue:[]
        }
    }
    render(){
        return(
            <div id="AddFamily">
                <div className="list-wrap">
                    <div className="list">
                        <span>与本人的关系</span>
                        <List className="list-select">
                            <Picker value={this.state.sValue} cols={1} data={this.state.data} className="forss"
                                    onOk={(val)=>{this.choose(val)}}
                                    extra="请选择与本人的关系"
                            >
                                <List.Item arrow="horizontal"></List.Item>
                            </Picker>
                        </List>
                    </div>
                    <div className="list">
                        <span>姓名</span>
                        <input type="text" placeholder="请输入家人信息" />
                    </div>
                    <div className="list">
                        <span>身份证号</span>
                        <input type="text" placeholder="请输入家人身份证号" />
                    </div>
                    <div className="list">
                        <span>手机号码</span>
                        <input type="text" placeholder="请输入家人手机号" />
                    </div>
                </div>
                <div className="modal">重要信息：建立完善家人关系，方便直系亲属间共享社保资源，享受
                    更方便、快捷的社保服务。</div>
                <div className="button-wrap"><Button type="primary" onClick={()=>{alert('该功能尚未开放')}}>保存</Button></div>
            </div>
        )
    }
}