/**
 * Created by 银信数据科技 on 2018/7/4.
 */
import React,{Component} from 'react';
import {Grid,Modal} from 'antd-mobile';
import './index.less';
const alert=Modal.alert;
export default class SocialQuery extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    icon: require('@/assets/img/socialpayment_icon_oldinsurance@2x.png'),
                    text:'城乡居民养老保险'
                },{
                    icon: require('@/assets/img/socialsearch_icon_medicalinsurance@2x.png'),
                    text:'城乡居民医疗保险'
                }
            ]
        }
    }
    render() {
        return (
            <div id="SocialPay">
                <Grid data={this.state.data} columnNum={2} onClick={()=>{alert('栏目正在建设中')}} />
            </div>
        )
    }
}