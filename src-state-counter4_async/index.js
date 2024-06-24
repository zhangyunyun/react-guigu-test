/* 
   入口文件
*/
import React from 'react'
import ReactDom from 'react-dom'

//路由
import {BrowserRouter} from 'react-router-dom'
//import {HashRouter} from 'react-router-dom'

//redux状态管理
import {Provider} from 'react-redux'
import store from './redux/store'

//组件UI库样式，按需加载时不需要引入(这里暂时还有问题)
import 'antd-mobile/dist/antd-mobile.css'

//自定义组件(这里引入组件）
import App from './app'

//渲染组件标签
ReactDom.render(
   (
      <BrowserRouter>
         <Provider store={store} >
            <App />
         </Provider>
      </BrowserRouter>
      
      /* <HashRouter>
         <App /> 
      </HashRouter> */
   
   ), 
   document.getElementById('root')
)
