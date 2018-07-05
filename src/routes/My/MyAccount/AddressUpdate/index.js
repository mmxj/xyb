/**
 * Created by 银信数据科技 on 2018/6/26.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {submitButton} from '@/redux/actions';
import Ajax from '@/services'
import './index.less'
class AddressUpdate extends Component {
    constructor(props){
        super(props);
        this.updateaddress=this.updateaddress.bind(this);
        this.props.submit(this.updateaddress);
        if(!this.props.location.state){
            this.props.history.replace('/index/my/myaccount')
        }
    }
    componentDidMount(){
        if(!this.props.location.state){
            this.props.history.replace('/index/my/myaccount');
            return
        }
        this.AddressUpdateaddress.value=this.props.location.state.data.address;
    }

    updateaddress(){
        let value=this.AddressUpdateaddress.value;
        let id = this.props.location.state.data.id;
        if(value!==null&&value!==''){
            Ajax({
                router:'/user/update',
                session:true,
                data:{
                    id:id,
                    address:value
                },
                callback:(data)=>{
                    if(data.ret.errorCode===0){
                        alert('设置成功');
                        window.history.back()
                    }
                }

            })
        }else{
            alert('地址不能设置为空')
        }
    }
    render() {
        return (
            <div id="AddressUpdate">
                <div className="box-wrap">
                    <div className="list clearfix">
                        <span>地址</span>
                        <input type="text" ref={(el)=>{this.AddressUpdateaddress=el}} className="text-right"/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        submit:(config)=>{
            dispatch(submitButton(config))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddressUpdate)