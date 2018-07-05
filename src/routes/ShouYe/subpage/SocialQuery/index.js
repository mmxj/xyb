/**
 * Created by 银信数据科技 on 2018/7/4.
 */
import React,{Component} from 'react';
import {Grid} from 'antd-mobile';
import './index.less';
export default class SocialQuery extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    icon: require('@/assets/img/socialsearch_icon_search_basemassage@2x.png'),
                    text:'基本信息',
                    router:'socialquery/socialbasic'
                },{
                    icon: require('@/assets/img/socialsearch_icon_medical_payment@2x.png'),
                    text:'医保缴费',
                    router:'socialquery/socialpayment'
                },{
                    icon: require('@/assets/img/socialsearch_icon_familypay@2x.png'),
                    text:'家庭参保',
                    router:'/index/socialquery/socialfamily'
                },{
                    icon: require('@/assets/img/socialsearch_icon_balance@2x.png'),
                    text:'社保余额',
                    router:'socialquery/socialbalance'
                }
            ]
        }
    }
    render() {
        return (
            <div id="SocialQuery">
                <Grid data={this.state.data} columnNum={3} onClick={(data)=>{this.props.history.push(data.router)}} />
            </div>
        )
    }
}