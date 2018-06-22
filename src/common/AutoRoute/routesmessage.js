/**
 * Created by 银信数据科技 on 2018/6/22.
 */
import ShouYe from '@/routes/ShouYe/ShouYe' //引入跳转模块 //首页
import MoreArticle from '@/routes/ShouYe/subpage/MoreArticle' //引入子页面 //更多文章

import Medical from '@/routes/Medical/Medical' //医疗

import PaymentCode from '@/routes/PaymentCode/PaymentCode' //付款码

import My from '@/routes/My/My' // 我的

import Login from '@/routes/Login/Login' //登录页

import SignIn from '@/routes/Login/SignIn'

export default  function routesmessage(pathname){ //设置route页面地方
    /*
     * @path:显示的路由
     * @component:对应的组件
     * @exact:是否准匹配
     * @refresh:是否开启下拉刷新功能
     * @title:头部显示的标题名称
     * @showFooter:是否显示下面的导航栏
     * @back:是否显示返回键
     * */
    switch (pathname) {
        case '/index': //首页
            return {path: pathname, component: ShouYe, exact: true, refresh: true , title:'乡银保',showFooter:true,back:false}

        case '/index/moreartice': //文章列表
            return {path:pathname, component: MoreArticle, exact: true, refresh: true , title :'文章列表',showFooter:false,back:true}

        case '/index/medical': //医疗
            return {path: pathname, component: Medical, exact: true, refresh: false , title:'医疗',showFooter:true,back:false}

        case '/index/paymentcode': //付款码
            return {path: pathname, component: PaymentCode, exact: true, refresh: false , title :'付款码',showFooter:true,back:false}

        case '/index/my': // 我的
            return {path: pathname, component: My, exact: true, refresh: false , title : '我的',showFooter:true,back:false}

        case '/index/login': // 我的
            return {path: pathname, component: Login, exact: true, refresh: false , title : '登录',showFooter:false,back:true}

        case '/index/signin': // 我的
            return {path: pathname, component: SignIn, exact: true, refresh: false , title : '注册',showFooter:false,back:true}

        default :
            return 404
    }

}