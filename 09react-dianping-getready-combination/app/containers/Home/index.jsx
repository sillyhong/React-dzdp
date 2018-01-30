import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import Homeheader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {

        return (
            <div>
                <Homeheader cityName={this.props.userinfo.cityName}/>
                <Category />
                <Ad />
                <List cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }

}

//--------------------绑定react redux
//不是对象{} 不能扩展语法
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
)(Home)

