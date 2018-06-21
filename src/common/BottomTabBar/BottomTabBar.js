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
    render(){
        return (
            <div
                id="BottomTabBar"
            >
                <div className="tabbar-wrap">
                <TabBar
                    unselectTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"

                >
                    <TabBar.Item
                        title="首页"
                        key="shouye"
                        icon={
                            <div style={{
                                width:'22px',
                                height:'22px',
                                background:'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}></div>
                        }
                        selectedIcon={
                            <div style={{
                                width:'22px',
                                height:'22px',
                                background:'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }}></div>
                        }
                        selected={this.state.selectedTab === 'newpage'}
                        onPress={()=>{
                            this.setState({
                                selectedTab:'newpage'
                            })

                            this.clickNav(this.props.match.url)
                            // this.props.history.push('/newpage')
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        title="医疗"
                        key="医疗"
                        icon={
                            <div style={{
                                width:'22px',
                                height:'22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}></div>
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
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
                            <div style={{
                                width:'22px',
                                height:'22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}></div>
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                            />
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
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
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