/**
 * Created by 银信数据科技 on 2018/6/26.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {submitButton} from '@/redux/actions';
import cookie from 'react-cookies';
import {ActionSheet,Modal} from 'antd-mobile'
import Ajax from '@/services';
import './index.less';
const alert = Modal.alert;
// const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
// let wrapProps;
// if (isIPhone) {
//     wrapProps = {
//         onTouchStart: e => e.preventDefault(),
//     };
// }
class MyCard extends Component{
    constructor(props){
        super(props)
        this.addCard=this.addCard.bind(this);
        this.props.submit(this.addCard);
        this.state={
            card:[],
            activeclass:'',
            acitveId:null
        }
    }
    addCard(){
        this.props.history.push('mycard/addnewcard');
    }
    showActionSheet=(cardId)=>{
        // alert('Delete', 'Are you sure???', [
        //     { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
        //     { text: 'OK', onPress: () => console.log('ok') },
        // ]);

        const BUTTONS = ['撤销银行卡','取消']
            ActionSheet.showActionSheetWithOptions({
                options: BUTTONS,
                cancelButtonIndex: BUTTONS.length - 1,
                title: '请选择操作方式',
                maskClosable: true,
                'data-seed': 'logId',
            }, (buttonIndex) => {
                if(buttonIndex===0){
                    alert('确定撤销该银行卡？','',[{text:'取消',onPress:()=> {},style:'default'},{text:'确定',onPress:()=>{ this.deleteBind(cardId)}},]);
                }

            });


    };
    deleteBind=(id)=>{
        Ajax({
            router:'/user/card/bind/delete',
            session:true,
            data:{
                id:id
            },
            callback:(data)=>{
                if(data.ret.errorCode===0){
                    this.getBind()
                    alert('撤销成功');
                }
            }

        })
    }
    componentWillMount(){
      this.getBind()
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

                    this.setState({
                        card:this.state.card.concat(arr)
                    })
                }
            })
        }
    }
    componentDidMount(){

    }
    cardtype(type){
        if(type===1){
            return "socialCard"
        }else if(type===3){
            return "bankCard"
        }
        return "other"
    }
    cardName(type){
        if(type===1){return "社保卡"}else if(type===3){return "银联卡"}else{return "其他卡"}
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
    render(){
        return (
            <div id="MyCard">
                {this.state.card.map(val => (
                    <div key={val.id} className={`list ${this.cardtype(val.cardType)} `}  onClick={()=>{this.showActionSheet(val.id)}}  onTouchStart={()=>{return false}} >
                        <span className="name">
                            <img className="backlogo" src={require(`@/assets/bank/banklogo/${this.checkLogo(val.bankName)}.png`)} alt=""/>
                            {val.bankName}({val.account.substring(val.account.length-4,val.account.length)})</span>
                        <span className="cardType">{this.cardName(val.cardType)}</span>
                        <img className="backBg" src={require(`@/assets/bank/bankbg/${this.checkLogo(val.bankName)}.png`)} alt=""/>
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {

    }
}
const mapDispatchToProps= (dispatch) =>{
    return {
        submit:(config) =>{
            dispatch(submitButton(config))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyCard)