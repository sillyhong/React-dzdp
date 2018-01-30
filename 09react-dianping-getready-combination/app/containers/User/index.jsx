import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { hashHistory} from 'react-router'

import Header from '../../components/Header'
import UserInfo from '../../components/UserInfo'
import OrderList from './subpage/OrderList'
class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo
        return (
            <div>
                <Header title='用户主页' backRouter='/'/>
                <UserInfo
                    username={userinfo.username}
                    cityName={userinfo.cityName}/>
                <OrderList username={userinfo.username}/>
            </div>
        )
    }

    componentDidMount() {
        //判断是否已经登陆
        console.log(this.props.userinfo)
        if(!this.props.userinfo.username){
            hashHistory.push('/Login')
        }
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}


function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
