import React,{Component} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import LayoutFull from './layouts/LayoutFull/LayoutFull'
import LayoutDefault from './layouts/LayoutDefault/LayoutDefault'
import './RouterWrap.less'
export default class RouterWrap extends Component{
    render(){
        return (
            <div id="RouterWrap">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={LayoutFull} exact/>
                        <Route path="/newPage" component={LayoutDefault} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}