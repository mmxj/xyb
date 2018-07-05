import React,{Component} from 'react';
import Ajax from '@/services';
import cookie from 'react-cookies';
import {submitButton} from '@/redux/actions.js';
import {connect} from 'react-redux';
import './index.less';
class SocialFamily extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[]
        };
        this.props.submit(this.submit);
    }
    submit=()=>{
        this.props.history.push('socialfamily/addfamily');
    }
    repliceNum(num){

        if(num.length===11){
            var m =num.substring(3,num.length-4).replace(/./g,"*");
            return num.substr(0,3)+m+num.substr(num.length-4);
        }else{
            var m =num.substring(4,num.length-4).replace(/./g,"*");
            return num.substr(0,4)+m+num.substr(num.length-4);
        }
    }
    componentDidMount=()=>{
        Ajax({
            router:'/user/card/bind/get',
            session:true,
            data:{
                userId:cookie.load('userId'),
                cardType:["1"]
            },
            callback:(data)=>{
                if(data.rows.length>0){
                    console.log(data.rows);
                    this.setState({
                        data:data.rows
                    })
                }

            }
        })
    }
    render(){
        return(
            <div id="SocialFamily">
                {this.state.data.map((val) =>
                    <div className="list-wrap" key={val.id}>
                        <div className="list">
                            <span>账户：{this.repliceNum(val.account)}</span>
                        </div>
                        <div className="list">
                            <span>姓名：{val.userName}({val.relationTypeName})</span>
                        </div>
                        <div className="list">
                            <span>手机：{this.repliceNum(val.mobile)}</span>
                        </div>
                        <div className="list">
                            <span>银行：{val.bankName}</span>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

        submit:(config) =>{
            dispatch(submitButton(config))
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(SocialFamily)