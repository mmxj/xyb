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
import {setRoute,setHash,loginStatus} from '../../redux/actions'; //redux 的action方法
import AutoRoute from '../../common/AutoRoute'; //配置显示的route
import cookie from 'react-cookies';

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
        window.addEventListener('hashchange',()=>{//监听路由变化
            if(window.location.hash!=='#/index/password'&&window.location.hash!=='#/index/signin'&&window.location.hash!=='#/index/login'){
                this.props.setHashs(window.location.hash);
            }
            console.log(this.props.status)
            let session=cookie.load('session');
            if(session){
                this.props.loginStatus(true);
            }else{
                this.props.loginStatus(false);
            }

            if(!this.props.status){
                if(window.location.hash!=='#/index/my'
                    &&window.location.hash!=='#/index/medical'
                    &&window.location.hash!=='#/index'
                    &&window.location.hash!=='#/index/signin'
                    &&window.location.hash!=='#/index/password'
                ){
                    if(!this.props.status){
                        this.props.history.push('/index/login')
                    }
                }
            }
            // console.log(this.props.status)
        })
    }
    componentDidMount() {

    }
    componentDidUpdate() {

    }
    componentWillUnmount(){

    }
    goback(){
        if(window.location.hash==="#/index/login" ||window.location.hash=='#/index/signin'
            ||window.location.hash=='#/index/password'){
            window.history.go(-2)
        }else{
            window.history.back()
        }

    }
    render(){
        return (
            <div id="LayoutDefault">
                <NavBar
                    className="navBar"
                    mode="dark"
                    icon={
                        this.props.routelist.back?
                            <span style={{width:'0.88rem',height:'0.88rem',display:'inline-block',position:'relative'}} onClick={this.goback}>
                                <svg className="icon" aria-hidden="true" style={{width:'0.36rem',height:'0.36rem',position:'absolute',top:'50%',marginTop:'-0.16rem'}}>
                                    <use xlinkHref="#icon-xiangyinbaoicon-3"></use>
                                </svg>
                            </span> :""
                    }
                    //  rightContent={[
                    //      <svg key="0" className="icon rightShao" aria-hidden="true">
                    //          <use xlinkHref="#icon-xiangyinbaoicon-11"></use>
                    //      </svg>,
                    // ]}
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
                {this.props.routelist.showFooter?<BottomTabBar match={this.props.match} history={this.props.history}/>:''}


            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        title:state.changeTitle,
        routelist:state.routelist,
        hash:state.hash,
        status:state.loginstatus
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        routeconfig:(config) =>{
            dispatch(setRoute(config))
        },
        setHashs:(config) =>{
            dispatch(setHash(config))
        },
        loginStatus:(config) =>{
            dispatch(loginStatus(config))
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(LayoutDefault)