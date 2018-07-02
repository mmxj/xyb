/**
 * Created by 银信数据科技 on 2018/6/29.
 */
import React,{Component} from 'react';
import Ajax from '@/services';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import {Icon} from 'antd-mobile';
import cookie from 'react-cookies';
import {submitButton,downRefre} from '@/redux/actions'
import './index.less';

class MyOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            pageNum:1,
            data:[],
            loading:false,
            dataMore:true,
            showNodata:false,
            payStatus:null
        }
        this.props.onRefresh(this.onNewonRefresh);
        this.props.downRefre(this.downRefre);

    }
    onNewonRefresh=()=>{
        this.setState({
            data:[],
            pageNum:0
        })
        this.onRefresh()
    }
    componentDidMount(){
        console.log(cookie.load('payStatus'))
        if(cookie.load('payStatus')){
            this.setState({
                payStatus:cookie.load('payStatus')
            })
        }
        setTimeout(()=>{  this.getorder();},0)

    }
    componentWillUnmount(){
        clearTimeout(this.time)
        this.props.downRefre(()=>{return });
    }
    downRefre=(ref)=>{

       if((document.getElementById('MyOrder').offsetHeight-ReactDOM.findDOMNode(ref).offsetHeight)-(ReactDOM.findDOMNode(ref).scrollTop)===0){
           if(this.state.dataMore){
               this.setState({
                   loading:true
               })
               clearTimeout(this.time)
               this.time= setTimeout(()=>{
                   this.onRefresh()

               },200)
           }else{
               this.setState({
                   showNodata:true
               })
           }
       }
    }
    onRefresh=()=>{
        var time=this.state.pageNum;
        time++
        this.setState({
            pageNum:time
        });
        setTimeout(()=>{
            this.getorder()
        },1000)

    }
    getorder=()=>{
            Ajax({
                router:'/order/prescription/get',
                session:true,
                data:{
                    userLoginMobile:cookie.load('userName'),
                    pageInfo:{
                        pageNum:this.state.pageNum,
                        pageSize:10
                    },
                    payStatus:this.state.payStatus
                },
                callback:(data)=>{
                    console.log(data)
                    if(data.rows.length>0){
                        this.setState({
                            data:this.state.data.concat(data.rows),
                            loading:false
                        })
                    }else{
                        this.setState({
                            dataMore:false,
                            loading:false
                        })
                    }
                }
            })

    }



    payStatus=(status)=>{//返回支付状态
        switch(status){
            case 1:
                return "等待支付"
            case 2:
                return "支付成功"
            case 3:
                return "支付撤销"
            case 4:
                return "支付冲正"
            case 5:
                return "支付退货"
            case 6:
                return "支付失败"
            default :
                return "未知状态"
        }
    }
    render(){
        return (
            <div id="MyOrder">
                {this.state.data.map(val=>
                    <div className="list-wrap" key={val.no}>
                        <div className="list" onClick={()=>{this.props.history.push({pathname:'myorder/orderdetails',state:val})}}>
                            <div className="clearfix list-top"><span className="name">{val.companyName?val.companyName:'其他商户'}</span><span className="money">￥{(val.amount)/100}</span></div>
                            <div className="clearfix"><span className="time">{val.sfsCreate.split('.')[0]}</span><span className={`list-button ${val.payStatus===2?'buttonsuccss':''} ${val.payStatus===6?'defeated':''}` }>{this.payStatus(val.payStatus)}</span></div>
                        </div>
                    </div>
                )}
                {this.state.loading?<div className="loading">正在加载 <Icon className="loading-icon" type="loading"/></div>:""}
                {this.state.showNodata?<div className="loading">没有更多数据</div>:""}
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
        onRefresh:(config) =>{
            dispatch(submitButton(config))
        },
        downRefre:(config) =>{//下来刷新
            dispatch(downRefre(config))
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(MyOrder)