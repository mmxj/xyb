/**
 * Created by 银信数据科技 on 2018/6/19.
 */
import React,{Component} from 'react';
import './index.less';
import Ajax from '../../../../services/index';
export default class Article extends Component{
    constructor(prop){
        super(prop);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        Ajax({
            router:'/ips/article/get',
            data:{
                pageInfo:{
                    pageSize:10,
                    pageNum:1
                },
                enableFlag:1
            },
            callback:(data)=>{
                this.setState({data:data.rows});

            }
        })
    }
    createTime(time){
        return time.split('.')[0];
    }
    render () {
        return (
            <div id="articelistWrap">
                {this.state.data.map(val => (
                    <div className="articelist" key={val.id}>
                        <div className="list-title">

                            <div className="list-title-content" style={{overflow:'hidden',textOverflow:'ellipsis',display:'-webkit-box','WebkitBoxOrient':'vertical','WebkitLineClamp':2}}>
                                {val.title}
                            </div>
                            <br/>
                            <span className="articeBeginTime">{this.createTime(val.publishDate)}</span>
                        </div>
                        <div className="list-img">
                            <img src={`http://www.yxunionpay.com:8087/yxsj-openapi-web/openapi/download/download.do?download_type=2&file_name=${val.thumbImage}`} alt=""/>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}