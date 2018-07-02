/**
 * Created by 银信数据科技 on 2018/6/27.
 */
import React,{Component} from 'react';
import './index.less'
export default class AddResult extends Component {
    componentDidMount(){
        if(!this.props.location.state){
            this.props.history.push('/index/my/mycard/addnewcard');
            return
        }
            this.iframe.srcdoc=this.props.location.state.html;

    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        return (
            <div id="AddResult" >
                <iframe className="iframe" ref={el=> this.iframe=el} frameBorder="0"></iframe>
            </div>
        )
    }
}