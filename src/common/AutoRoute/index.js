/**
 * Created by 银信数据科技 on 2018/6/20.
 */
import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import {PullToRefresh} from 'antd-mobile';
import {connect} from 'react-redux';
import {setRoute,changeTitle} from '@/redux/actions';
import routesmessage from './routesmessage'


import './index.less';
class AutoRoute extends Component{
    constructor(props){
        super(props);
        this.state={
            height: document.documentElement.clientHeight,
            cc:null
        };



    }
    componentDidMount() {

    }

    componentWillReceiveProps(){
        clearTimeout(this.timer)
        this.timer=setTimeout(()=>{
            if(this.props.routelist.path===routesmessage(this.props.location.pathname).path){

            }else{
                this.props.setRoutes(routesmessage(this.props.location.pathname));
                this.props.changeTitle(routesmessage(this.props.location.pathname).title);
            }
            },200)
        // this.props.setRoutes(this.routesmessage());
        // this.props.changeTitle(this.routesmessage().title);
        if(this.props.refresh){
            var a = document.getElementsByClassName('am-pull-to-refresh-content-wrapper')[0].offsetTop ;
            setTimeout(() => this.setState({cc: a,}), 0);
        }
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
        routelist:state.routelist,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        setRoutes:(config) => {
            dispatch(setRoute(config))
        },
        changeTitle: (text) => {
            dispatch(changeTitle(text));
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AutoRoute)