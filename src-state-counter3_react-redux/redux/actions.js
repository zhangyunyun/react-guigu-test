/* 
  包含n个Action Creator模块
  通过Action Creator(创建Action的工厂函数)
*/
import {INCREMENT,DECREMENT} from './action-types'

export const increment = (number) => ({type:INCREMENT,data:number})
export const decrement = (number) => ({type:DECREMENT,data:number})
