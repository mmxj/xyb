/**
 * Created by 银信数据科技 on 2018/6/15.
 */
import React,{Component} from 'react';
import {Carousel} from 'antd-mobile';
import './index.less';
import Ajax from '../../../../services/services';
export default class Banner extends Component{
    constructor(prop){
        super(prop);
        this.state={
            data:[{id:'1',imageDownloadUrl:'1527565866991-广告栏图片（新）.png'}],
            imgHeight:'3.8rem'
        }
    }
    componentDidMount(){
           Ajax({
                router:'/ips/slider/get',
                data:{
                    enableFlag:1
                },
                callback:(data)=>{
                    this.setState({data:data.rows});

                },
                error:(data)=>{
                    alert('网络错误')
                }
            })
    }
    render() {
        return (
            <Carousel
                className="banner"
                autoplay={true}
                infinite
                dotStyle={{margin: '0 0.08rem', marginBottom: '0.2rem', width: '0.16rem', height: '0.16rem',borderRadius:'16px'}}
                dotActiveStyle={{margin: '0 0.08rem', marginBottom: '0.2rem', width: '0.16rem', height: '0.16rem',borderRadius:'16px',background:'#29bfff',opacity:'0.8'}}
            >
                {
                    this.state.data.map(val => (
                        <a href={val.jumpUrl}
                           key={val.id}
                           style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                        >
                            <img src={`http://www.yxunionpay.com:8087/yxsj-openapi-web/openapi/download/download.do?download_type=1&file_name=${val.imageDownloadUrl}`} alt=""
                                 style={{width: '100%', verticalAlign: 'top',height:'3.8rem'}}
                                 onLoad={() => {
                                     // fire window resize event to change height
                                     window.dispatchEvent(new Event('resize'));
                                     this.setState({imgHeight: 'auto'});
                                 }}
                            />
                        </a>
                    ))
                }
            </Carousel>
        )
    }
}