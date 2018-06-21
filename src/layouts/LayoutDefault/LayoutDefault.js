/**
 * Created by 银信数据科技 on 2018/5/3.
 */
import React,{Component} from 'react';
import {NavBar} from 'antd-mobile';
// import {Route} from 'react-router-dom';
import BottomTabBar from '../../common/BottomTabBar/BottomTabBar'
import ShouYe from '../../routes/ShouYe/ShouYe'
import './LayoutDefault.less'
import {connect} from 'react-redux';
import {changeTitle,setRoute} from '../../redux/actions'; //redux 的action方法
import AutoRoute from '../../common/AutoRoute'; //配置显示的route


class LayoutDefault extends Component{

    constructor(props){
        super(props);
        this.state={
            selectedTab:'blueTab',

        }
        this.props.routeconfig( //设置默认的主页
            {
                path:this.props.match.url+'/',
                component:ShouYe,
                exact:true,
                refresh:true,
            }
        )
    }
    componentWillUnmount(){

        clearTimeout(this.closeTimer);

    }

    render(){
        return (
            <div id="LayoutDefault">
                <NavBar
                    className="navBar"
                    mode="dark"
                    // icon={<svg className="icon" aria-hidden="true">
                    //     <use xlinkHref="#icon-xiangyinbaoicon--1"></use>
                    // </svg>}
                     rightContent={[
                         <svg key="0" className="icon rightShao" aria-hidden="true">
                             <use xlinkHref="#icon-xiangyinbaoicon-11"></use>
                         </svg>,
                    ]}
                    onClick={this.props.onClick}
                >
                    {this.props.title.title}
                </NavBar>
                <div className="content">
                    {/*<Route  path={this.props.match.url+'/'} component={ShouYe}  exact/>*/}
                    {/*<Route path={this.props.match.url+'/medical'} component={Medical} />*/}
                    {/*<Route path={this.props.match.url+'/paymentcode'} component={PaymentCode} />*/}
                    {/*<Route path={this.props.match.url+'/my'} component={My} />*/}

                        <AutoRoute location={this.props.location} path={this.props.routelist.path} component={this.props.routelist.component} exact={this.props.routelist.exact} refresh={this.props.routelist.refresh} />

                </div>
                <BottomTabBar match={this.props.match} history={this.props.history}/>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        title:state.changeTitle,
        routelist:state.routelist,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(changeTitle('首页'));
        },
        routeconfig:(config) =>{
            dispatch(setRoute(config))
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(LayoutDefault)