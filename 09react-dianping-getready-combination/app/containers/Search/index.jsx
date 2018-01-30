import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/SearchList'
import { hashHistory } from 'react-router'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params

        return (
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword}/>
            </div>
        )
    }
    componentDidMount() {
        const params = this.props.params
        console.log(`params.type： ${params.type}`)
        console.log(`params.category： ${params.keyword}`)

    }

}

export default Search
