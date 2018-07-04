import React,{Component} from 'react';
import Ajax from '@/services';
import cookie from 'react-cookies';
import {Modal,Icon} from 'antd-mobile';
import JsBarcode from 'jsbarcode';
import {connect} from 'react-redux';
import {submitButton} from '@/redux/actions'
import './PaymentCode.less';
var QRCode = require('qrcode.react');
const semicircleR =require('../../assets/img/banyuan.png');
const semicircleL =require('../../assets/img/halfround.png');

const alert=Modal.alert;
class PaymentCode extends Component {
    constructor(props){
        super(props);
        this.state={
            card:[
            ],
            showPo:false,
            qrcode:null
        }
    }
    componentDidMount(){
        this.getBind();
        this.props.refresh(this.refresh);
        this.countDown=1
        this.timer=setInterval(()=>{
            if(this.countDown>=60){
                this.getQrCode();
                this.countDown=1;
            }
            this.countDown++;
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    refresh=()=>{ //刷新组件
       this.setState({
           card:[],
           showPo:false,
           qrcode:null
       });
        this.getBind();
        this.countDown=1
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
                        this.getQrCode();
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
    getQrCode=()=>{
        Ajax({
            router:'/base/qrcode/get',
            session:true,
            data:{
                deviceType:1,
                validateCodeType:8,
                bindBankCardId:this.state.card[0].id,
                orderNo:{"type":"REFRESH_PAYMENT_QRCODE"}
            },

            callback:(data) => {
                JsBarcode(this.barcode, data.qrCode,{
                    displayValue:false,
                    lineColor:'#333'
                })
                this.setState({
                    qrcode:data.qrCode
                })

            }
        })
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
    chooseback=(card)=>{//修改卡顺序 默认以第一张卡作为二维码生成卡
        this.showpopup();
        let bankarr=this.state.card
        let startbank=bankarr[0];
        let index=0;
        for(var i in bankarr){
            if(bankarr[i]===card){
                index=i
            }
        };
        bankarr[0]=card;
        bankarr[index]=startbank;
        this.setState({
            bank:bankarr
        })
    }
    render(){
        return (
            <div id="PaymentCode">
                {  this.state.card.length>0? <div className="changeCard clearfix" onClick={()=>{this.showpopup()}}>
                    <div className="icon">
                        <img className="logo" src={require(`@/assets/bank/banklogo/${this.checkLogo(this.state.card[0].bankName)}.png`)} alt=""/></div><div className="title">{this.state.card[0].bankName} ({this.state.card[0].account.substring(this.state.card[0].account.length-4,this.state.card[0].account.length)})</div><div className="rightButton">换卡</div>
                </div>:
                    <div className="changeCard clearfix">
                    <div className="icon">
                        <img className="logo" src={require(`@/assets/bank/banklogo/其他.png`)} alt=""/></div><div className="title">尚未绑卡</div><div className="rightButton">换卡</div>
                    </div> }
                <div className="payCode">
                    <div className="stripCode">
                        <img id="barcode" ref={el=>this.barcode=el} alt="条形码" />
                        <span>{this.state.qrcode}</span>
                    </div>
                    <div className="codeBorder">
                        <img className="semicircleL" src={semicircleL} alt=""/>
                        <img className="semicircleR"  src={semicircleR} alt=""/>
                    </div>
                    {this.state.qrcode?<div className="qrcode-wrap"><QRCode style={{height:'4.1rem',width:'4.1rem'}} fgColor="#333"  level="H" className="qrcode" value={this.state.qrcode} />
                    <div className="qrcode-text">
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-39"></use>
                        </svg>
                        银联金融级安全机制,为您的安全支付护航</div>
                    </div> :""}
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
const mapStateToProps = (state) =>{
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      refresh:(config)=>{
          dispatch(submitButton(config))
      }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(PaymentCode)