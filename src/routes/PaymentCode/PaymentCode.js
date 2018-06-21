import React,{Component} from 'react';
import './PaymentCode.less';
const chinabak= require('../../assets/img/chinabak.png');
const semicircleR =require('../../assets/img/banyuan.png')
const semicircleL =require('../../assets/img/halfround.png')
export default class PaymentCode extends Component {
    render(){
        return (
            <div id="PaymentCode">
                <div className="changeCard clearfix">
                    <div className="icon"><img src={chinabak} alt=""/></div>
                    <div className="title">广州银行 (2565) </div>
                    <div className="rightButton">换卡</div>
                </div>
                <div className="payCode">
                    <div className="stripCode">条形码</div>
                    <div className="codeBorder">
                        <img className="semicircleL" src={semicircleL} alt=""/>
                        <img className="semicircleR"  src={semicircleR} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}
