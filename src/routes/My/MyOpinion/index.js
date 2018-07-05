/**
 * Created by 银信数据科技 on 2018/7/4.
 */
import React,{Component} from 'react';
import {TextareaItem , Button ,Modal} from 'antd-mobile';
import cookie from 'react-cookies';
import Ajax from '@/services';
import './index.less'
const alert = Modal.alert;
export default class MyOpinion extends Component{
    constructor(props){
        super(props);
        this.state= {
            value: null
        }
    }
    opinion=()=>{
        Ajax({
            router:'/ips/opinion/add',
            session:true,
            data:{
                userId:cookie.load('userId'),
                content:this.state.value,
                title:'意见反馈',
                opinionType:4
            },
            callback:()=>{
                this.setState({
                    value:null
                },()=>{
                    alert('反馈成功');
                })

            }
        })
    }
    handleChange=(event)=>{
        this.setState({value: event});
    }
    render(){
        return (
            <div id="MyOpinion">
                <TextareaItem
                    placeholder="请输入您的意见（限200字）"
                    rows={5}
                    count={200}
                    prefixListCls="textarea"
                    value={this.state.value}
                    onChange={(e)=>this.handleChange(e)}
                />
                <Button type="primary" className="option-button" onClick={()=>{this.opinion()}}>提交</Button>
            </div>
        )
    }
}