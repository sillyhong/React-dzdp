import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'


import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import './style.less'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],//存储的列表数据
            hasMore: false,//是否有更多数据
            isLoadingMore: false,// false 点击加载 true 加载中
            page: 1//下一页数据
        }
   }
    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                <div>
                    {this.state.data.length
                        ? <ListComponent data={this.state.data}></ListComponent>
                        : <div>加载中..</div>
                    }
                    {
                        this.state.hasMore
                            ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                            : ''
                    }
                </div>

            </div>
        )
    }
    componentDidMount(){
        // 获取首页数据
        this.loadFirstPageData()
    }
    // 获取首页数据
    loadFirstPageData() {
        const cityName = this.props.cityName
        const result = getListData(cityName, 0)
        this.resultHandle(result)
    }

    //获取更多数据
    loadMoreData() {
        //记录状态
        this.setState({
            isLoadingMore: true
        })

        const cityName = this.props.cityName
        const page = this.state.page
        const result = getListData(cityName, page)
        this.resultHandle(result)

        //增加页数
        this.setState({
            page: page + 1,
            isLoadingMore: false
        })
    }

    //处理结果
    resultHandle(result){
        result.then( res => {
            return res.json()
        }).then( json => {
            const data = json.data
            const hasMore = json.hasMore
            console.log(data)
                this.setState({
                    data: this.state.data.concat(data),
                    hasMore: hasMore
                })
        }).catch(ex => {
            console.log('猜你喜欢加载数据出现错误，'+ ex.message)
        })
    }


}

export default List
