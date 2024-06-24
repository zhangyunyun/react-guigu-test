/*
  1.react-rdux 容器组件
    
  注：1)state.jsx本应该放在containers文件夹中 
      2)state.jsx因是路由组件,暂时放在views文件夹下
 */
import React from 'react'
//引入连接函数
import {connect} from 'react-redux'
//引入redux中action函数
import {increment,decrement,incrementAsync} from '../../redux/actions.js'
//引入components中的UI组件(counter.jsx)
import Counter from '../../components/counter/counter'


//向外暴露连接App组件的包装组件
export default connect(
   state => ({count:state}),
   {
      increment:increment,   //increment：第一个为属性名   increment：第二个为属性值(action中通过Action Creator创建的工厂函数)
      decrement:decrement,
      incrementAsync:incrementAsync
   }
)(Counter)