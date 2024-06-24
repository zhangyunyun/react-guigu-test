//redux状态管理,中间件
import {createStore,applyMiddleware} from 'redux'
//引入异步中间件
import thunk from 'redux-thunk'
//引入redux调试工具
import { composeWithDevTools } from 'redux-devtools-extension'
//引入reducers中包含的reducer工厂函数方法
import {counter} from './reducers'

//开发环境(本地)/生产环境(线上)
let finalCreateStore
if (process.env.NODE_ENV === 'production') {  //这里判断项目环境，正式的话打印的，和可视化的中间件可以去掉
  finalCreateStore = [thunk]
} else if (window.__REDUX_DEVTOOLS_EXTENSION__) { //检查到有redux可视化工具就使用
  finalCreateStore = [thunk]
} else {
  finalCreateStore = [thunk]
}

//创建store对象
const store = createStore(
   counter,
   //applyMiddleware(thunk,logger), //应用上异步中间件   
   //composeWithDevTools()
   composeWithDevTools(
      applyMiddleware(...finalCreateStore)
   )
)
console.log(store)

//向外暴露store对象
export default store