import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

class OrderListComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const data = this.props.data

        return (
            <div>
                {
                    data.map( (item, index) => {
                        return <Item key={index} data={item} submitComment={this.props.submitComment}></Item>
                })
                }
            </div>
        )
    }
}

export default OrderListComponent
