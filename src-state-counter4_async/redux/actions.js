/* 
  包含n个action creator模块
  通过action creator(创建Action的工厂函数)

  同步action返回的是一个对象
  异步action返回的是一个函数
*/
import {INCREMENT,DECREMENT} from './action-types'

export const increment = (number) => ({type:INCREMENT,data:number})
export const decrement = (number) => ({type:DECREMENT,data:number})

//异步action
export const incrementAsync = (number) => {
  return dispatch => {
    //异步代码
    setTimeout(() => {
      //1s之后执行
      dispatch(increment(number))
    },1000)
  }
}
