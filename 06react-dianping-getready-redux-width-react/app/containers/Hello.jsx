import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../actions/userinfo'

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'

class Hello extends React.Component {
    render() {
        return (
            <div>
                <p>hello world</p>
                <hr/>
                <A userinfo={this.props.userinfos}/>
                <hr/>
                <B userinfo={this.props.userinfos}/>
                <hr/>
                <C actions={this.props.userinfoActions}/>
            </div>
        )
    }
    componentDidMount() {
        // 模拟登陆
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })
    }
}

function mapStateToProps(state) {
    return {
        //userinfos函数返回的对象 作为当前组件props的对象    state.userinfo是Action触发的新state数据
        userinfos: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userinfoActions: bindActionCreators(userinfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)