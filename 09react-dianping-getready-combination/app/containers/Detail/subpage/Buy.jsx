import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as storeActionFromOtherFile from '../../../actions/store'

import { hashHistory } from 'react-router'

import BuyAndStore from '../../../components/BuyAndStore'
class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }
    render() {
        return (
           <div>
               <BuyAndStore
               isStore={this.state.isStore}
               storeHandle={this.storeHandle.bind(this)}
               buyHandle={this.buyHandle.bind(this)}
               />
           </div>
        )
    }

    componentDidMount() {
        const storeAction = this.props.storeAction
        console.log(store)
        console.log(storeAction);
    }


    componentDidMount() {
        //验证当前商户是否收藏
        this.checkStoreState()
    }

    //验证当前商户是否收藏
    checkStoreState() {
        const id = this.props.id
        const store = this.props.store

        store.some( (item => {
            if( item.id === id){
                this.setState({
                    isStore: true
                })
                //跳出循环
                return true
            }
        }))
        return false
    }


    //购买事件
    buyHandle() {
        //验证登录，未登录则return
        const loginFlag = this.loginCheck()
        if( !loginFlag ){
            return
        }

        //此过程模拟够味，因此可省去复杂的流程

        //跳转到用户主页
        hashHistory.push('/User')
    }

    //收藏事件
    storeHandle() {
        //验证登录，未登录则return
        const loginFlag = this.loginCheck()
        if( !loginFlag ){
            return
        }

        const id = this.props.id
        const storeAction = this.props.storeAction
        if(this.state.isStore){
            //已经收藏。点击取消
            storeAction.rm({id: id})
        }else{
            //尚未收藏。点击收藏
            storeAction.add({id:id})
        }

        //更新状态
        this.setState({
            isStore: !this.state.isStore
        })
    }

    //验证是否登录
    loginCheck() {
        const id = this.props.id
        const userinfo = this.props.userinfo
        if( !userinfo.username ){
            //页面跳转到登陆页面，要传入目标router，以便登录完了可以自己跳转回来
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
            return false
        }
        return true
    }

}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeAction: bindActionCreators(storeActionFromOtherFile, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)
