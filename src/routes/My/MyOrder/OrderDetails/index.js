/**
 * Created by 银信数据科技 on 2018/6/29.
 */
import React,{Component} from 'react';
import {Button,Modal,Icon} from 'antd-mobile';
import cookie from 'react-cookies';
import Ajax from '@/services';
import JsBarcode from 'jsbarcode';
import {dateformat} from '@/unit'
import './index.less'
export default class OrderDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            data:{},
            card:[],
            showPo:false,
            payData:{}
        }
    }
    componentDidMount(){
        if(this.props.history.location.state){
            var time=dateformat(new Date().toLocaleDateString());
            this.setState({
                data:Object.assign({},this.props.history.location.state),
            })
            Ajax({
                router:'/payment/paymentdeal/get',
                session:true,
                data:{
                    orderNo:this.state.data.no
                },
                callback:(data)=>{
                    this.setState({
                        payData:data.rows[0],
                        time:time
                    },()=>{
                    if(this.barcode&&this.state.time===this.state.data.sfsCreate.split(' ')[0].replace(/-/g,'/')&&this.state.payData.cardType===1) {
                        JsBarcode(this.barcode, this.state.data.id, {
                            displayValue: false,
                            lineColor: '#333'
                        })
                    }})
                }
            })

            this.getBind()
        }else{
            this.props.history.push('/index/my/myorder')
        }

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
    businessType(type){
        switch(type){
            case 1:
                return "缴费"
            case 2:
                return "挂号"
            case 3:
                return "门诊"
            case 4:
                return "社保单"
            default :
                return "未知"
        }
    }
    getBind=()=>{
        if(cookie.load('userId')){
            Ajax({
                router:'/user/card/bind/get',
                session:true,
                data:{
                    userId:cookie.load('userId')
                },
                callback:(data)=>{
                    var arr=data.rows;
                    if(data.rows.length>0){
                        this.setState({
                            card:this.state.card.concat(arr)
                        })
                    }else{
                        alert('您尚未绑卡，无法使用该功能','',[
                            {text:'取消',onPress:()=>{},style:'default'},
                            {text:'立即绑卡',onPress:()=>{
                                this.props.history.push('/index/my/mycard')
                            }}
                        ])
                    }

                }
            })
        }
    };
    chooseback=(val)=>{
        console.log(this.state.data)

    }
    checkLogo(name){//检测文件中是否有这个银行的logo
        var arr =["北京农商银行","北京银行","渤海银行","成都农商银行","成都银行","大连银行","赣州银行","工商银行","广发银行","广州银行","汉口银行","杭州银行","河北银行","华夏银行","嘉兴银行","江苏民丰农村商业银行","江苏银行","江阴农商银行","交通银行","晋商银行","九江银行","南昌银行","南京银行","内蒙古银行","宁波银行","宁夏银行","农村信用合作社","齐鲁银行","其他","青海银行","上海农村商业银行","上海浦东发展银行","上海银行","上饶银行","绍兴银行","深圳发展银行","盛京银行","苏州银行","台州银行","天津银行","威海市市银行","微商银行","温州银行","乌鲁木齐市商业银行","邢台银行","兴业银行","营口银行","招商银行","浙商银行","中国建设银行","中国民生银行","中国农业银行","中国平安银行","中国银行","中国邮政","中信银行","重庆农村商业银行","重庆银行"]
        for(var i in arr){
            if(arr[i]===name){
                return name
            }
        }
        return '其他'
    }
    cardName(type){
        if(type===1){return "社保卡"}else if(type===3){return "银联卡"}else{return "其他卡"}
    }
    showpopup=()=>{
        this.setState({
            showPo:!this.state.showPo
        })
    }
    render() {
        return (
            <div id="OrderDetails">
                <div className="top-card">
                    <div className="title"> {this.state.data.companyName?this.state.data.companyName:'其他商户'}</div>
                    <div className="amount"> ￥{(this.state.data.amount)/100}</div>
                    <div className="status"> {this.payStatus(this.state.data.payStatus)}</div>
                    <div className="list clearfix"><span className="label">订单说明</span> <span className="text">{this.state.data.remark?this.state.data.remark:'无'}</span></div>
                    <div className="list clearfix"><span className="label">订单类型</span> <span className="text">{this.businessType(this.state.data.businessType)}</span></div>
                    <div className="line"></div>
                    <div className="list clearfix"><span className="label">订单时间</span> <span className="text time">{this.state.data.sfsCreate?this.state.data.sfsCreate.split('.')[0]:''}</span></div>
                    <div className="list no clearfix"><span className="label">订单号</span> <span className="text">{this.state.data.no}</span></div>

                </div>
                {
                    this.state.data.payStatus===2&&this.state.time===this.state.data.sfsCreate.split(' ')[0].replace(/-/g,'/')&&this.state.payData.cardType===1?
                        <div className="code"><span className="title">撤销码</span>
                            <div className="bar-Code">
                                <img id="barcode" ref={el=>this.barcode=el} alt="条形码" />
                                <br/>
                                <p>{this.state.data.id}</p>
                            </div>
                        </div>:''
                }
                <div className="button">
                    {
                        this.state.data.payStatus===1?  <Button className="payorder" onClick={()=>{this.showpopup()}}>订单支付</Button>:
                            <Button  type="primary" onClick={()=>{window.history.go(-1)}}>返回</Button>
                    }

                </div>
                <Modal
                    popup
                    visible={this.state.showPo}
                    onClose={()=>{this.showpopup()}}
                    animationType="slide-up"
                >
                    <div className="payCodepopup">
                        <div className="title">
                            请选择付款银行卡
                            <Icon type="cross" className="close" onClick={()=>{this.showpopup()}}>关闭</Icon>
                        </div>
                        <div className="cardlist">
                            {this.state.card.map(val =>
                                (<div className="list clearfix" key={val.id} onClick={()=>{this.chooseback(val)}}>
                                    <img className="backlogo" src={require(`@/assets/bank/banklogo/${this.checkLogo(val.bankName)}.png`)} alt=""/>
                                    <span className="backName">{val.bankName} ({val.account.substring(val.account.length-4,val.account.length)})</span>
                                    <span className="cardtype">{this.cardName(val.cardType)}</span>
                                </div>)
                            )}
                        </div>
                        <div className="listfooter"></div>
                    </div>
                </Modal>
            </div>
        )
    }
}