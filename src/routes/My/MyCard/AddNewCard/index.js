/**
 * Created by 银信数据科技 on 2018/6/27.
 */
import React,{Component} from 'react';
import {Button,Picker,List} from 'antd-mobile';
import {removespace} from '@/unit';
import Ajax from '@/services';
import './index.less';
export default class AddNewCard extends Component{
    constructor(props){
        super(props);
        this.next=this.next.bind(this);
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
            sValue:[9]
        }
    }
    next(){
        let idCord=this.idCord.value;
        let name=this.name.value;
        let bankNumber=this.bankNumber.value;
        let phone=removespace(this.phone.value);

        if(idCord===""||idCord===null){
            alert('请输入身份证号码')
            return
        }
        if(name===""||name===null){
            alert('请输入您的姓名')
            return
        }
        if(bankNumber===""||bankNumber===null){
            alert('请输入银行卡号')
            return
        }
        if(phone===""||phone===null){
            alert('请输入银行预留手机号码')
            return
        }

        Ajax({
            router:'/user/bankcard/bind',
            session:true,
            data:{
                bankAccount:bankNumber,
                relationType:this.state.sValue[0],
                idCardNo:idCord,
                mobile:phone,
                userName:name
            },
            callback:(data)=>{
                sessionStorage.setItem("doc",data.html)
                this.props.history.push({pathname:'addresult',state:data})
            }
        })
    }
    choose(val){
       this.setState({
           sValue:val
       })
    }
    render(){
        return (
            <div id="AddNewCard">
                <div className="title">* 如需添加社保卡请到社保专用终端完成</div>
                <div className="form">
                    <div className="list">
                        <span>身份证</span>
                        <input type="text" placeholder="请输入您本人的身份证号码"  ref={el => this.idCord =el}  maxLength="18"/>
                    </div>
                    <div className="list">
                        <span>姓名</span>
                        <input type="text" placeholder="请输入您的姓名" ref={el => this.name =el}/>
                    </div>
                    <div className="list">
                        <span>银行卡号</span>
                        <input type="text" placeholder="请输入您的银行卡号" ref={el => this.bankNumber =el}/>
                    </div>
                    <div className="list">
                        <span>银行预留手机号</span>
                        <input type="text" placeholder="请输入您的银行预留手机号码"  ref={el => this.phone =el} maxLength="11"/>
                    </div>

                    <div className="list">
                        <span>与本人的关系</span>
                        <List className="List-wrap">
                            <Picker value={this.state.sValue} cols={1} data={this.state.data} className="forss"
                                    onOk={(val)=>{this.choose(val)}}
                            >
                                <List.Item arrow="horizontal"></List.Item>
                            </Picker>
                        </List>

                    </div>
                    {/*<div className="list">*/}
                        {/*<span>验证码</span>*/}
                        {/*<input type="text" className="code" placeholder="请输入短信验证码"/>*/}
                        {/*<Button type="primary" className="getcode" onClick={()=>{this.getsms()}}>获取验证码</Button>*/}
                    {/*</div>*/}
                </div>
                <div className="submit">
                    <Button data={this.state.data} type="primary" onClick={()=>{this.next()}} >添加</Button>
                </div>
            </div>
        )
    }
}