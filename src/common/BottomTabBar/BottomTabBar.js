import React,{Component} from 'react';
import {TabBar} from 'antd-mobile';
import './BottomTabBar.less';
import {connect} from 'react-redux';
class BottomTabBar extends Component{

    constructor(props){
        super(props);
        var locations=this.props.history.location.pathname.split('/');
        this.state={
            selectedTab:locations[locations.length-1]
        }
        this.clickNav=this.clickNav.bind(this);
    }
    clickNav(url){
        if(this.props.history.location.pathname!==url){
            this.props.history.push(url)
        }
    }
    componentDidMount(){
        window.addEventListener('hashchange',()=>{//监听路由变化
                if(window.location.hash==="#/index/paymentcode"){
                        this.setState({
                            selectedTab:'paymentcode'
                        })
                }
             })
    }
    render(){
        return (
            <div
                id="BottomTabBar"
            >
                <div className="tabbar-wrap">
                <TabBar
                    unselectedTintColor="#555"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="shouye"
                        icon={
                            <svg key="5" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-5"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg key="9" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-9"></use>
                            </svg>
                        }
                        selected={this.state.selectedTab === 'index'}
                        onPress={()=>{
                            this.setState({
                                selectedTab:'index'
                            })

                            this.clickNav(this.props.match.url)
                            // this.props.history.push('/index')
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="医疗"
                        key="医疗"
                        icon={
                            <svg key="10" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-10"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg key="12" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-12"></use>
                            </svg>
                        }
                        selected={this.state.selectedTab === 'medical'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'medical',
                            });

                            this.clickNav(this.props.match.url+'/medical')
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="付款码"
                        key="fukuanma"
                        icon={
                            <svg key="11" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-11"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg key="13" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-13"></use>
                            </svg>
                        }
                        selected={this.state.selectedTab === 'paymentcode'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'paymentcode',
                            });

                            this.clickNav(this.props.match.url+'/paymentcode')
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <svg key="14" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-14"></use>
                            </svg>
                        }
                        selectedIcon={
                            <svg key="15" className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-xiangyinbaoicon-15"></use>
                            </svg>
                        }
                        title="我的"
                        key="My"
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'my',
                            });

                            this.clickNav(this.props.match.url+'/my')
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
                </div>
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

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(BottomTabBar)