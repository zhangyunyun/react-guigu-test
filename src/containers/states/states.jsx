/*
  1.react-redux 容器组件
    
  注：1)states.jsx应该放在containers文件夹中 
 */
import React from 'react'

//引入连接函数
import {connect} from 'react-redux'
//引入redux中action函数
import {increment,decrement,incrementAsync} from '../../redux/actions.js'
//引入components中的UI组件(counter.jsx)
import State from '../../components/state/state'


//向外暴露连接App组件的包装组件
export default connect(
   state => ({count:state.counter}),
   {
      increment:increment,   //increment：第一个为属性名   increment：第二个为属性值(action中通过Action Creator创建的工厂函数)
      decrement:decrement,
      incrementAsync:incrementAsync
   }
)(State)