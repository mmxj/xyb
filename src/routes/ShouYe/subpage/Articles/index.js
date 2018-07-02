/**
 * Created by 银信数据科技 on 2018/7/2.
 */
import React,{Component} from 'react';
import './index.less'
export default class Articles extends Component{
    constructor(props){
        super(props);
        this.state= {
            data: {}
        }

    }
    componentDidMount(){
        if(this.props.history.location.state){
            this.setState({
                data:Object.assign({},this.props.history.location.state)
            });
        }else{
            this.props.history.push('/index');
        }
    }
    render(){
        return (
            <div id="Article">
                <iframe className="iframe" src={this.state.data.url?this.state.data.url:''} frameBorder="0"></iframe>
            </div>
        )
    }
}