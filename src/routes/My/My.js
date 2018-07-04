import React,{Component} from 'react';
import {Flex} from 'antd-mobile';
import cookie from 'react-cookies'
import './My.less';
export default class My extends Component {
    constructor(props){
        super(props);
        this.goroute=this.goroute.bind(this)
    }
    goroute(url){
        this.props.history.push(url)
    }
    render(){
        return (
            <div id="My">
                <Flex className="topIcon">
                    <Flex.Item>
                        <svg key="48" className="icon" aria-hidden="true">
                                  <use xlinkHref="#icon-xiangyinbaoicon-48"></use>
                        </svg>
                        <br/>
                        <span>扫一扫</span>
                    </Flex.Item>
                    <Flex.Item onClick={()=>{this.props.history.push('/index/paymentcode')}}>
                        <svg key="46" className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-46"></use>
                        </svg>
                        <br/>
                        <span>付款码</span>
                    </Flex.Item>
                    <Flex.Item onClick={()=>{cookie.remove('payStatus');this.props.history.push('my/myorder')}}>
                        <svg key="47" className="icon" aria-hidden="true" >
                            <use xlinkHref="#icon-xiangyinbaoicon-47"></use>
                        </svg>
                        <br/>
                        <span>我的订单</span>
                    </Flex.Item>
                    <Flex.Item onClick={()=>{this.goroute('my/mycard')}}>
                        <svg key="45" className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-45"></use>
                        </svg>
                        <br/>
                        <span>卡管家</span>
                    </Flex.Item>
                </Flex>
                <div className="navlist">
                    <div className="listButton" onClick={()=>{this.goroute('my/myaccount')}}>
                        <svg key="27" className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-27"></use>
                        </svg>
                        <span>我的账号</span>
                        <svg key="2" className="icon2" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-2"></use>
                        </svg>
                    </div>
                    <div className="listButton">
                        <svg key="30" className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-30"></use>
                        </svg>
                        <span>我的社保</span>
                        <svg key="2" className="icon2" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-2"></use>
                        </svg>
                    </div>
                    <div className="listButton">
                        <svg key="33" className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-33"></use>
                        </svg>
                        <span>医疗转运</span>
                        <svg key="2" className="icon2" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-2"></use>
                        </svg>
                    </div>
                </div>
                <div className="navlist">
                    <div className="listButton">
                        <svg key="0" className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-28"></use>
                        </svg>
                        <span>意见反馈</span>
                        <svg key="2" className="icon2" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-2"></use>
                        </svg>
                    </div>
                    <div className="listButton" onClick={()=>{this.goroute('my/faq')}}>
                        <svg key="29" className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-29"></use>
                        </svg>
                        <span>常见问题</span>
                        <svg key="2" className="icon2" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-2"></use>
                        </svg>
                    </div>
                    <div className="listButton" onClick={()=>{this.goroute('my/myabout')}}>
                        <svg key="0" className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-32"></use>
                        </svg>
                        <span>关于我们</span>
                        <svg key="2" className="icon2" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-2"></use>
                        </svg>
                    </div>
                </div>
                <div className="navlist" >
                    <div className="listButton"  onClick={()=>{this.goroute('my/mysetting')}}>
                        <svg key="31" className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-31"></use>
                        </svg>
                        <span>安全设置</span>
                        <svg key="2" className="icon2" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-2"></use>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }
}