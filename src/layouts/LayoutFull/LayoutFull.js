import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import {Button} from 'antd-mobile';
import './LayoutFull.less';
export default class LayoutFull extends Component{
    constructor(props){
        super(props);
        this.clickhandler=this.clickhandler.bind(this);
    }
    clickhandler(){
        this.props.history.push('/newpage')
    }
    render(){
        return (
            <div id="LayoutFull">
                <Link to="/newpage">去首页</Link>
                <Button onClick={this.clickhandler}>去首页</Button>
            </div>
        )
    }
}