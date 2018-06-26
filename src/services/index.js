/**
 * Created by 银信数据科技 on 2018/6/15.
 */
/*
 *project 村医后台
 *author 马学坚
 *email webmxj@163.com
 *date 2017.09.02
 *需要先引入jquery和jquery.md5.js插件
 * 传进来的值要为对象
 * callback 成功的回调函数
 * errorCallback 失败的回调函数
 */
import axios from 'axios';
import md5 from 'js-md5';
import {Toast} from 'antd-mobile';
import errorAlert from './errorAlert';
import cookie from 'react-cookies';
let loading ={
        toast:Toast,
        show:true
    };
const Ajax = (opt)=>{
        let setting={//外部传进来的参数http://192.168.0.104
            // openUrl : "http://onlinepay.site:8091",//设置测试环境请求的域名
            openUrl: "http://www.yxunionpay.com:8091",//设置生产环境请求的域名
            router:"/base/validatecode/picture/get", //设置请求的地址路径
            appid: 3,
            async: true,
            callback: function () {
            },
            error: function () {

            }
        }
        //
        let session=cookie.load('session');
        if(opt.session){
            if(!session){
                window.location.href=window.location.origin+'/#/index/login';
                return
            }
        }
        // let tempSignature = "";//计算后返回的signature 算法在下面makeSignature中
        let version ="1.0.0"; //版本号 默认是1.0.0
        let key = "qazwsxedc";//参数密匙
        let nonce = Math.ceil(Math.random()*1000);//随机数
        let timestamp = new Date().getTime();//时间戳
        let url=null;//定义地址
        // let res=null;
        let makeSignature=(session, biz_content) => {
            let md5Content = md5(biz_content).toUpperCase();
            let signature=null;

            if(!session){
                signature ="appid="+setting.appid +"&biz_content="+md5Content + "&nonce="+ nonce +"&timestamp=" + timestamp + "&version=" + version + "&key=" + key;
            } else{
                signature="appid="+setting.appid +"&biz_content="+md5Content + "&nonce="+ nonce + "&session="+session+"&timestamp=" +timestamp + "&version=" + version +
                    "&key=" + key;
            }
            let tempSignature = md5(signature).toUpperCase();
            return tempSignature;
        }
        for(var i in opt){
            setting[i]=opt[i]
        }
        // extend(this.setting,opt);
        // 将this.setting.data转为字符串 post要求
        let data=JSON.stringify(setting.data);
        if(!setting.session){
            url=setting.openUrl+setting.router+"?appid=" +setting.appid + "&version=" + version + "&nonce=" + nonce + "&timestamp=" + timestamp + "&signature=" +makeSignature("", data);
        }else{
            url=setting.openUrl+setting.router+"?appid=" +setting.appid + "&version=" + version + "&nonce=" + nonce + "&session="+ setting.session +"&timestamp=" +
                timestamp + "&signature=" + makeSignature(setting.session, data);
        }
        /*
         *contentType设置请求头
         */
        if(loading.show){
            loading.toast.loading('加载中...',0);
            loading.show=false
        }
        axios.defaults.headers['Content-Type']='application/json; charset=UTF-8';
        axios.post(url,data).then((res)=>{

            var data=JSON.parse(res.request.response);
            if(data.ret.errorCode===0){
                opt.callback(data);
            }else{
                errorAlert(data)
            }
            loading.toast.hide();
            loading.show=true
        }).catch((res)=>{
            loading.toast.hide();
            loading.show=true
            console.log(res,'请求错误');

        })
    }
export default Ajax;