/**
 * Created by 银信数据科技 on 2018/6/22.
 */
import Nofind from '@/routes/404'
import ShouYe from '@/routes/ShouYe/ShouYe' //引入跳转模块 //首页

import Article from '@/routes/ShouYe/subpage/Articles' //文章详情
import MoreArticle from '@/routes/ShouYe/subpage/MoreArticle' //引入子页面 //更多文章

import Medical from '@/routes/Medical/Medical' //医疗

import PaymentCode from '@/routes/PaymentCode/PaymentCode' //付款码

import My from '@/routes/My/My' // 我的

import Login from '@/routes/Login/Login' //登录页
import SignUp from '@/routes/Login/SignUp'//注册页
import Password from '@/routes/Login/Password' //忘记密码

import MyAccount from '@/routes/My/MyAccount' //我的账号
import AddressUpdate from '@/routes/My/MyAccount/AddressUpdate' //我的账号
import EmailUpdate from '@/routes/My/MyAccount/EmailUpdate' //我的账号
import MyCard from '@/routes/My/MyCard' //我的卡管家
import AddNewCard from '@/routes/My/MyCard/AddNewCard' //添加新卡
import AddResult from '@/routes/My/MyCard/AddResult' //添加新卡

import MyOrder from '@/routes/My/MyOrder' //我的订单
import OrderDetails from '@/routes/My/MyOrder/OrderDetails' //订单详情

import MySetting from '@/routes/My/MySetting' //设置
import ChangePassword from '@/routes/My/MySetting/ChangePassword' //设置


export default  function routesmessage(pathname){ //设置route页面地方
    /*
     * @path:显示的路由
     * @component:对应的组件
     * @exact:是否准匹配
     * @refresh:是否开启下拉刷新功能
     * @title:头部显示的标题名称
     * @showFooter:是否显示下面的导航栏
     * @back:是否显示返回键
     * @rightsubmit:右上角的保存按钮是否显示
     * @ cardAdd:添加卡的加字按钮
     * @rebutton:刷新按钮 付款码页面
     * */
    let Config={//默认字段
        path: pathname,
        component: ShouYe,
        exact: true,
        refresh: false ,
        title:'乡银保',
        showFooter:true,
        back:false,
        rightsubmit:false,
        cardAdd:false,
        rebutton:false,
    }
    function clone(obj){
        return Object.assign({},Config,obj);//拷贝对象
    }
    switch (pathname) {
        case '/index': //首页
            return clone({
                refresh:true,
            }) //填入变化字段
        case '/index/moreartice': //文章列表
            return  clone({
                component:MoreArticle,
                title:'文章列表',
                refresh:true,
                showFooter:false,
                back:true
            })
        case '/index/article':
            return  clone({
                component:Article,
                title:'文章详情',
                showFooter:false,
                back:true
            })
        case '/index/medical': //医疗
            return clone({
                component:Medical,
                title:'医疗',
            })
        case '/index/paymentcode': //付款码
            return clone({
                component: PaymentCode,
                title :'付款码',
                rebutton:true
            })
        case '/index/my': // 我的
            return clone({
                component: My,
                title : '我的',
            })
        case '/index/login': // 登录
            return clone({
                component: Login,
                title:'登录',
                showFooter:false,
                back:true
            })
        case '/index/signin': // 注册
            return clone({
                component:SignUp,
                title:'注册',
                showFooter:false,
                back:true,
            })
        case '/index/password': // 重置密码
            return clone({
                component:Password,
                title:'忘记密码',
                showFooter:false,
                back:true,
            })
        case '/index/my/myaccount': // 我的账户
            return clone({
                component:MyAccount,
                title:'我的账户',
                showFooter:false,
                back:true,
            })
        case '/index/my/myaccount/addressupdate': // 修改地址
            return clone({
                component:AddressUpdate,
                title:'设置地址',
                showFooter:false,
                back:true,
                rightsubmit:true
            })
        case '/index/my/myaccount/emailupdate': // 设置邮箱
            return clone({
                component:EmailUpdate,
                title:'设置邮箱',
                showFooter:false,
                back:true,
                rightsubmit:true
            })
        case '/index/my/mycard': // 我的卡管家
             return clone({
                 component:MyCard,
                 title:'我的卡管家',
                 showFooter:false,
                 back:true,
                 cardAdd:true
             })
        case '/index/my/mycard/addnewcard': // 我的卡管家
             return clone({
                 component:AddNewCard,
                 title:'添加新卡',
                 showFooter:false,
                 back:true,
             })
        case '/index/my/mycard/addresult': // 我的卡管家
            return clone({
                component:AddResult,
                title:'添加新卡',
                showFooter:false,
                back:true,
            })

        case '/index/my/myorder': //我的订单
            return clone({
                component:MyOrder,
                title:'我的订单',
                showFooter:false,
                refresh:true,
                back:true
            })
        case '/index/my/myorder/orderdetails': //我的订单
            return clone({
                component:OrderDetails,
                title:'订单详情',
                showFooter:false,
                back:true
            })
        case '/index/my/mysetting': //设置
            return clone({
                component:MySetting,
                title:'设置',
                showFooter:false,
                back:true
            })
        case '/index/my/mysetting/changepassword': //设置
            return clone({
                component:ChangePassword,
                title:'修改密码',
                showFooter:false,
                back:true
            })
        default :
            return clone({
                component:Nofind,
                title:'404',
                showFooter:false,
                back:true,

            })
    }

}