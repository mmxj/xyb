/**
 * Created by 银信数据科技 on 2018/6/21.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {downRefre} from '@/redux/actions';
import {Icon} from 'antd-mobile';
import ReactDOM from 'react-dom';
import './index.less';
import Ajax from '../../../../services/index';
 class MoreArticle extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            pageNum:1,
            dataMore:true
        }
        this.props.downRefre(this.downRefre);
    }
    componentDidMount(){
        this.getArticle()
    }
     componentWillUnmount(){
         clearTimeout(this.time)
         this.props.downRefre(()=>{return });
     }
    getArticle=()=>{
        Ajax({
            router:'/ips/article/get',
            data:{
                pageInfo:{
                    pageSize:10,
                    pageNum:this.state.pageNum
                },
                enableFlag:1
            },
            callback:(data)=>{
                if(data.rows.length>0){
                    this.setState({
                        data:this.state.data.concat(data.rows),
                        loading:false
                    });
                }else{
                    this.setState({
                        dataMore:false,
                        loading:false
                    })
                }


            }
        })
    }
     downRefre=(ref)=>{

         if((document.getElementById('MoreArticle').offsetHeight-ReactDOM.findDOMNode(ref).offsetHeight)-(ReactDOM.findDOMNode(ref).scrollTop)<=1){
             if(this.state.dataMore){
                 if(this.state.dataMore){
                     this.setState({
                         loading:true
                     })
                     clearTimeout(this.time)
                     this.time= setTimeout(()=>{
                         this.onRefresh()
                     },200)
                 }
             }else{
                 this.setState({
                     showNodata:true
                 })
             }
         }
     }
     onRefresh=()=>{
         var time=this.state.pageNum;
         time++
         this.setState({
             pageNum:time
         });
         setTimeout(()=>{
             this.getArticle()
         },1000)

     }
    createTime(time){
        return time.split('.')[0];
    }
    go=(val)=>{
        this.props.history.push({pathname:'/index/article',state:val})
    }
    render() {
        return (
            <div id="MoreArticle">
                {this.state.data.map(val => (
                <div className="articelist" key={val.id} onClick={()=>{this.go(val)}}>
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
                {this.state.loading?<div className="loading">正在加载 <Icon className="loading-icon" type="loading"/></div>:""}
                {this.state.showNodata?<div className="loading">没有更多数据</div>:""}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        downRefre:(config) =>{//下来刷新
            dispatch(downRefre(config))
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(MoreArticle)