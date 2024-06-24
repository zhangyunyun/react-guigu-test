/* 
  包含n个action creator模块
  通过action creator(创建Action的工厂函数)

  同步action返回的是一个对象
  异步action返回的是一个函数
*/
import {INCREMENT,DECREMENT} from './action-types'
import {ADD_COMMENT,DELETE_COMMENT,GET_COMMENTS} from './action-types'
//增加
export const increment = (number) => ({type:INCREMENT,data:number})
//减少 
export const decrement = (number) => ({type:DECREMENT,data:number})

//添加评论
export const addComment = (comment) => ({type:ADD_COMMENT, data:comment})
//删除评论
export const deleteComment = (index) => ({type:DELETE_COMMENT, data:index})
//同步接收comments
const getComments = (comments) => ({type:GET_COMMENTS, data:comments})


//异步action 累加计数器
export const incrementAsync = (number) => {
  return dispatch => {
    //异步代码
    setTimeout(() => { 
      //1s之后执行
      dispatch(increment(number))
    },1000)
  }
}


export const commentsAsync = () => {
  return dispatch => {
    //模拟ajax异步获取comments评论列表
    setTimeout(() => {
      const comments = [
        {
          name:"Tom",
          content:"React挺好的啊"
       },
       {
          name:"Rose",
          content:"React太难了啦"
       }
      ]
      //通知dispatch分发action事件，触发reducer调用，产生新的state
      //分发同步action
      dispatch(getComments(comments))
    },1000)
  }
}