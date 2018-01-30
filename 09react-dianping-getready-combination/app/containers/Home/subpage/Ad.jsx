import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdData} from "../../../fetch/home/home"
import HomeAd from '../../../components/Home/HomeAd'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ? <HomeAd data={this.state.data}/>
                        : <div>加载中...</div>
                }
            </div>

        )
    }
    componentDidMount(){
        const result = getAdData()
        result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json
            // console.log(data.length);
            if (data.length) {
                this.setState({
                    data: data
                })
                // console.log(this.state.data);
            }
        }).catch(ex => {
            //发生错误
            if(__DEV__){
                console.error('首页广告模块获取数据失败.', ex.message)
            }

        })

    }
}

export default Ad
