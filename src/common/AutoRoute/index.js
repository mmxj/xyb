/**
 * Created by 银信数据科技 on 2018/6/20.
 */
import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import {PullToRefresh} from 'antd-mobile';
// import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {setRoute} from '../../redux/actions';

import ShouYe from '../../routes/ShouYe/ShouYe' //引入跳转模块
import Medical from '../../routes/Medical/Medical'
import PaymentCode from '../../routes/PaymentCode/PaymentCode'
import My from '../../routes/My/My'

import './index.less';
class AutoRoute extends Component{
    constructor(props){
        super(props);
        this.state={
            height: document.documentElement.clientHeight,
            cc:null
        };

        this.showRoute=this.showRoute.bind(this);

    }
    componentDidMount() {

    }
    showRoute(){ //设置route页面地方

        switch (this.props.location.pathname) {
            case '/newpage':
                return {path: this.props.location.pathname, component: ShouYe, exact: true, refresh: true}

            case '/newpage/medical':
                return {path: this.props.location.pathname, component: Medical, exact: true, refresh: true}

            case '/newpage/paymentcode':
                return {path: this.props.location.pathname, component: PaymentCode, exact: true, refresh: true}

            case '/newpage/my':
                return {path: this.props.location.pathname, component: My, exact: true, refresh: true}
            default :
                return 404
        }

    }
    componentDidUpdate() {
        this.props.setRoutes(this.showRoute());
        if(this.props.refresh){
           var a = document.getElementsByClassName('am-pull-to-refresh-content-wrapper')[0].offsetTop ;
           setTimeout(() => this.setState({cc: a,}), 0);
        }
            //     const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;//设置滚动页的高度
        //     setTimeout(() => this.setState({
        //         height: hei,
        //     }), 0);

    }
    render(){
        return (
            <div id="AutoRoute">
                {this.props.refresh ?
                    <PullToRefresh
                        damping={60}
                        distanceToRefresh={60}
                        indicator={{ deactivate: '下拉刷新' }}
                        ref={el => this.ptr = el}
                        style={{
                            height: '100%',
                            overflow: 'scroll',
                        }}
                        direction="down"
                        refreshing={false}
                        onRefresh={() => {
                            console.log('刷新')
                            if(this.props.onRefresh){
                                this.props.onRefresh();//刷新的回调函数
                            }
                        }}
                    >
                        <Route path={this.props.path} component={this.props.component} exact={this.props.exact}/>
                    </PullToRefresh>
                    :
                    <Route path={this.props.path} component={this.props.component} exact={this.props.exact}/>
                }
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        setRoutes:(config) => {
            dispatch(setRoute(config))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AutoRoute)