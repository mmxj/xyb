import React,{Component} from 'react';
import {Button} from 'antd-mobile'
import './index.less';
export default class FAQContent extends Component{
    constructor(props){
        super(props)
        if(this.props.history.location.state){
            this.state={data:this.props.history.location.state}
        }else{
            this.state={
                data:{}
            }
            this.props.history.replace('/index/my/faq')
        }

    }
    render(){
        return(
            <div id="FAQContent">
                <img className="banner" src={require('@/assets/img/question_banner.png')} alt=""/>


                    <div className="list-wrap" >
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-16"></use>
                        </svg>
                        <div className="list">
                            {this.state.data.title}
                        </div>
                    </div>
                    <div className="content">
                        {this.state.data.content}
                    </div>
                    <div className="button">
                        <Button className="faqgoButton" onClick={()=>{
                            window.history.go(-1)
                        }}>返回列表</Button>
                    </div>
            </div>
        )
    }
}