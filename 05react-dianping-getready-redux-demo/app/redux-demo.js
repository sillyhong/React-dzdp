import { createStore } from 'redux'

export default function () {
    // 下面这一段代码，就是 https://github.com/reactjs/redux 中的入门demo

    // 定义计算规则，即 reducer
    function counter(state = 0, action) {
        switch (action.type) {
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT':
                return state - 1
            default:
                return state
        }
    }

    // 根据计算规则生成 store
    let store = createStore(counter)

    // 定义数据（即 state）变化之后的派发规则
    store.subscribe(() => {
        console.log('current state', store.getState())
    })

    // 触发数据变化
    store.dispatch({type: 'INCREMENT'})
    store.dispatch({type: 'INCREMENT'})
    store.dispatch({type: 'DECREMENT'})
}
// import  { creatStore } from 'redux'
//
// export default  function () {
//     //一、定义规则
//     function counter(state = 0, action) {
//         switch (action.type){
//             case: 'INCREMENT'：
//                 return state + 1
//             case:  'DECREMENT':
//                 return state -1
//             default:
//                 return state
//         }
//     }
//     //二、根据规则生成store
//     let store = creatStore(counter)
//
//     //三、定义数据 (state)变化之后的派发规则
//     store.subscribe(() =>{
//         console.log('现在的状态', store.getState())
//     })
//
//     //四、触发数据变化
//     store.dispacth({type: 'INCREMENT'})
//     store.dispacth({type: 'INCREMENT'})
//     store.dispacth({type: 'DECREMENT'})
// }
