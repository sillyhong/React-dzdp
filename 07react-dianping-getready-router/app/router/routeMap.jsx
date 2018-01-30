// import React from 'react'
// import { Router, Route, IndexRoute } from 'react-router'
//
// import App from '../containers/App'
// import Home from '../containers/Home'
// import List from '../containers/List'
// import Detail from '../containers/Detail'
// import NotFound from '../containers/NotFound'
//
// class RouteMap extends React.Component {
//     updateHandle() {
//         console.log('每次router变化之后都会触发')
//     }
//     render() {
//         return (
//              <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
//                 <Route path='/' component={App}>
//                     <IndexRoute component={Home}/>
//                     <Route path='list' component={List}/>
//                     <Route path='detail/:id' component={Detail}/>
//                     <Route path="*" component={NotFound}/>
//                 </Route>
//             </Router>
//         )
//     }
// }
//
// export default RouteMap



import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers/App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'

class RouteMap extends React.Component{
    updateHandle(){
        console.log('每次路由发生变化都会触发onUpdate事件')
    }
    render(){
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle.bind(this)}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}></IndexRoute>
                    <Route path='list' component={List}></Route>
                    <Route path='detail/:id' component={Detail}></Route>
                    <Route path='*' component={NotFound}></Route>
                </Route>
            </Router>
        );
    }
}
export default RouteMap