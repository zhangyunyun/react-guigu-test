//redux状态管理
import {createStore} from 'redux'
//引入reducers中包含的reducer工厂函数方法
import {counter} from './reducers'
//创建store对象
const store = createStore(counter)
console.log(store)
//向外暴露store对象
export default store