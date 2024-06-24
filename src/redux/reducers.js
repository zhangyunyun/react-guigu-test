/* 
  包含n个reducer方法，根据老的state和指定action，产生一个新的state
*/
import {combineReducers} from 'redux'

//引入自定义的action type常量名称
import {INCREMENT,DECREMENT} from './action-types'
import {ADD_COMMENT,DELETE_COMMENT,GET_COMMENTS} from './action-types'

//计数器工厂函数
function counter(state=0,action){
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

const initComments = []
//comments评论工厂函数
function comments(state=initComments,action){
   //打印输出
   console.log('comments',state,action)

   //根据action的type属性，计算产生一个新的state值
   switch(action.type){
      case ADD_COMMENT:
         //向老的state数组数据中添加一条新的数据
         //返回的是一个新的数组(产生新的state状态)
         //老的state状态不变
         return [action.data, ...state]
      case DELETE_COMMENT:
         return state.filter((comment,index) => index!==action.data)
      case GET_COMMENTS:
         return action.data  
      default:
         return state      
   }
}


//其他工厂函数
export function xxx(){
   console.log('我是一个test工厂函数')
}

export default combineReducers({
   counter,
   comments
})


//redux向外暴露的是个什么结构？是一个对象
//{counter:2, comments:[]}