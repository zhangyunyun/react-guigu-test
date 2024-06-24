/* 
  包含n个reducer方法，根据老的state和指定action，产生一个新的state
*/
//引入自定义的action type常量名称
import {INCREMENT,DECREMENT} from './action-types'

//计数器工厂函数
export function counter(state=0,action){
   //state的形参初始值设置为0

   //打印输出
   console.log('counter',state,action)

   //根据saction的type类型，计算产生一个新的state值
   switch(action.type){
      case INCREMENT:
         return state + action.data
      case DECREMENT:
         return state - action.data
      default:
         return state      
   }
}

//其他工厂函数
export function xxx(){
   console.log('我是一个test工厂函数')
}

