//redux状态管理,中间件
//1.createStore用来创建store对象,
//2.applyMiddleware用来合并多个中间件，逗号隔开
import {createStore,applyMiddleware} from 'redux'
//引入reducers中包含的多个reducer工厂函数方法(已经写好的reducers函数)
//import {counter} from './reducers'
//import {comments} from './reducers'
import reducers from './reducers'

//引入异步中间件
//1.//可以在action 里传入dispatch getState
import thunk from 'redux-thunk'

//引入调用日志打印方法
//import { createLogger } from 'redux-logger' // 调用日志打印方法 collapsed是让action折叠，看着舒服点

//引入redux调试工具(redux的可视化工具，谷歌的应用商城工具)
import {composeWithDevTools} from 'redux-devtools-extension'


//创建store对象
const store = createStore(
   reducers,
   applyMiddleware(thunk)
   //composeWithDevTools(applyMiddleware(thunk)) //应用上异步中间件
)

console.log(store)
//向外暴露store对象
export default store