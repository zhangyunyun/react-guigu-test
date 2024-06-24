/* 
   入口文件
*/
import React from 'react'
import ReactDom from 'react-dom'

//路由
import {BrowserRouter} from 'react-router-dom'
//import {HashRouter} from 'react-router-dom'

//redux状态管理
import {createStore} from 'redux'
import {counter} from './redux/reducers'

//组件UI库样式，按需加载时不需要引入(这里暂时还有问题)
import 'antd-mobile/dist/antd-mobile.css'


//自定义组件(这里引入组件）
import App from './app'
import State from './views/state/state'

//创建store对象
const store = createStore(counter)

function render(){
   //渲染组件标签
   ReactDom.render(
      (
         <BrowserRouter>
            <State store={store} />
         </BrowserRouter>
         
         /* <HashRouter>
            <App /> 
         </HashRouter> */
      
      ), 
      document.getElementById('root')
   )
}

//初始化渲染界面
render()

//订阅监听，应用redux更新状态需重新渲染界面(即重绘)
//(store中状态变化了，就会自动调用进行重绘)
store.subscribe(render)
