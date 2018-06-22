import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import {Button} from 'antd-mobile';
import './LayoutFull.less';
export default class LayoutFull extends Component{
    constructor(props){
        super(props);
        this.clickhandler=this.clickhandler.bind(this);
        this.props.history.push('/index')
    }

    clickhandler(){
        this.props.history.push('/index')
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