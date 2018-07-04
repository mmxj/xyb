/**
 * Created by 银信数据科技 on 2018/7/4.
 */
import React,{Component} from 'react';
import Ajax from '@/services';
import './index.less'
export default class FAQ extends Component{
    constructor(props){
        super(props);
        this.state= {
            data: []
        }
    }
    componentDidMount(){
        Ajax({
            router:'/ips/faq/get',
            data:{},
            callback:(data)=>{
                console.log(data.rows)
                this.setState({
                    data:data.rows
                })
            }
        })
    }
    render(){
        return (
            <div id="FAQ">
                <img className="banner" src={require('@/assets/img/question_banner.png')} alt=""/>
                {   this.state.data.map(val =>
                    <div className="list-wrap" key={val.id} onClick={()=>{ this.props.history.push({pathname:'faq/faqcontent',state:val})}}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-xiangyinbaoicon-16"></use>
                        </svg>
                        <div className="list">
                            {val.title}
                        </div>
                    </div>
                )
                }
            </div>
        )
    }
}