import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'
class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {this.props.isLoadingMore
                    ?<span>加载中...</span>
                    :<span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>

                }
            </div>

        )
    }
    loadMoreHandle() {
        //执行父组件传输过来的加载更多
        this.props.loadMoreFn();
    }
    componentDidMount() {
        //滚动的时候加载更多数据

        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper

        //定义定时器
        let timer
        // 定义回调函数
        function callback() {
            const top = wrapper.getBoundingClientRect().top
            const windowHeight = window.screen.height //屏幕高度
            if(top && top < windowHeight){
               //wrapper已经暴露在凭屏幕的可视范围内
                loadMoreFn()
            }
        }
        //1.监听滚动时间
        window.addEventListener('scroll', function () {
            if(this.props.isLoadingMore){
                return
            }
            //2.节流操作
            if(timer){
                clearTimeout(timer)
            }
            //3.执行回调函数， 延迟50ms加载更多
            timer = setTimeout(callback, 50)
        }.bind(this))
    }
}

export default LoadMore
