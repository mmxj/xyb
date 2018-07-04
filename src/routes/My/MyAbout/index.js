/**
 * Created by 银信数据科技 on 2018/7/4.
 */
import React,{Component} from 'react';
import './index.less';
export default class MyAbout extends Component{
    render(){
        return (
            <div id="MyAbout">
                <div className="logo">
                    <svg key="55" className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-xiangyinbaoicon-55"></use>
                    </svg>
                    <p>版本号:1.0.6</p>
                </div>
                <div className="content">
                    专注为社保、金融提供一体化服务与交易的平台；以银联系统和网络为依托，以社保业务为核心；主动激活和利用社保部门和商业银行的现有社保和渠道资源；全面支持线上、线下支付、清算一体化平台；提供移动端APP、自助终端、管理PC端的等不同的应用场景和展现方式。
                </div>
            </div>
        )
    }
}