/**
 * Created by 银信数据科技 on 2018/5/8.
 */
import React,{Component} from 'react';
import {Flex,WhiteSpace,Icon} from 'antd-mobile';
import './ShouYe.less';
import Banner from './component/Banner';
import cookie from 'react-cookies';
import Article from './component/Article';
import {connect} from 'react-redux';
const shouyeLogo = require('../../assets/img/daidingdingdan.png');
const shebaoLogo= require('../../assets/img/socialsecuritysearch.png');
const shebaopayLogo= require('../../assets/img/socialsecuritypay.png');
class ShouYe extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            imgHeight:'3.52rem'
        }
        // console.log(this.props.history.location)
        this.goRoute=this.goRoute.bind(this);
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI','TekJlZRVCjLFexlOCuWn'],
            });
        }, 100);
    }
    goRoute(url){ //跳转路由
        url=this.props.history.location.pathname+url;
        this.props.history.push(url)
    }
    render(){
        return(
            <div id="ShouYe">
                <div className="banner">
                    <Banner/>
                </div>
                <div className="flex-container">
                    <Flex
                        justify="center">
                        <Flex.Item onClick={()=>{cookie.save('payStatus',1);this.props.history.push('/index/my/myorder')}}>
                            <div className="tag border-r">
                                <img src={shouyeLogo} alt="" className="menu" />
                                <br/>
                                <span>待付订单</span>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="tag border-r">
                                <img src={shebaoLogo} alt="" className="menu" />
                                <br/>
                                <span>社保查询</span>
                            </div>
                        </Flex.Item>
                        <Flex.Item>
                            <div className="tag">
                                <img src={shebaopayLogo} alt="" className="menu" />
                                <br/>
                                <span>社保缴费</span>
                            </div>
                        </Flex.Item>
                    </Flex>
                </div>
                <WhiteSpace size="lg"/>
                <div className="articeWrap">
                    <div className="articeTitle clearfix">
                        <span className="articeTitleName">资讯</span>
                        <span className="articeMore" onClick={()=>{this.goRoute('/moreartice')}} ><b className="articeMoreText">更多</b> <Icon className="articeIcon" size="sm" type="right"/></span>
                    </div>
                    <div className="articelistWrap">
                        <Article history={this.props.history}/>
                    </div>
                </div>
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

    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ShouYe)