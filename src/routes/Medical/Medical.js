/**
 * Created by 银信数据科技 on 2018/5/8.
 */
import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import cookie from 'react-cookies';
import './Medical.less'
export default class Medical extends Component {
    componentDidMount(){

    }
    render(){
        return (
            <div id="Medical">
                <iframe
                    style={{width:'100%',height:'100%'}}
                    // onLoad={() => {
                    //     const obj = ReactDOM.findDOMNode(this);
                    //     this.setState({
                    //         "iFrameHeight":  obj.contentWindow.document.body.scrollHeight + 'px'
                    //     });
                    // }}
                    ref="iframe"
                    src={`http://www.emtsos.com/emtApi.do?method=thiLogin&appid=yl&mobile=${cookie.load('userName')}&username=${cookie.load('userId')}`}
                    width="100%"
                    scrolling="no"
                    frameBorder="0"
                />

            </div>
        )
    }
}