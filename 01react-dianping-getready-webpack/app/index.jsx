import React from 'react'
import { render } from 'react-dom'

import './static/css/common.less'

class Hello extends React.Component {
    render() {
        var hello = <p>hello world</p>
        return (
            hello
        )
    }
}

render(
    <Hello/>,
    document.getElementById('root')
)
