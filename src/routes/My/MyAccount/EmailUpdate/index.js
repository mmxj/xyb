/**
 * Created by 银信数据科技 on 2018/6/26.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {submitButton} from '@/redux/actions';
import Ajax from '@/services'
import './index.less'
class EmailUpdate extends Component {
    constructor(props){
        super(props);
        this.updatemail=this.updatemail.bind(this);
        this.props.submit(this.updatemail);
        if(!this.props.location.state){
            this.props.history.push('/index/my/myaccount')
        }
    }
    componentDidMount(){
        if(!this.props.location.state){
            this.props.history.push('/index/my/myaccount');
            return
        }
      this.EmailUpdateemail.value=this.props.location.state.data.email;
    }
    updatemail(){
        let value =this.EmailUpdateemail.value;
        let id = this.props.location.state.data.id;
        if(value!==null&&value!==''){
            Ajax({
                router:'/user/update',
                session:true,
                data:{
                    id:id,
                    email:value
                },
                callback:(data)=>{
                    if(data.ret.errorCode===0){
                        alert('设置成功');
                        window.history.back()
                    }
                }

            })
        }else{
            alert('邮箱不能设置为空')
        }
    }
    render() {
        return (
            <div id="EmailUpdate">
                <div className="box-wrap">
                    <div className="list clearfix">
                        <span>邮箱</span>
                        <input type="text" ref={(el)=>{this.EmailUpdateemail=el}} className="text-right" />
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
export default connect(mapStateToProps,mapDispatchToProps)(EmailUpdate)
