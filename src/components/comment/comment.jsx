/* 
    comment评论UI组件
*/
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

import CommentAdd from './comment-add/comment-add'
import CommentList from './comment-list/comment-list'

import './comment.css'

export default class Comment extends Component{
   //接收redux中状态管理的数据
   static propTypes = {
      comments:PropTypes.array.isRequired,
      addComment:PropTypes.func.isRequired,
      deleteComment:PropTypes.func.isRequired,
      commentsAsync:PropTypes.func.isRequired
   }

   //给组件对象指定属性 
  /*  state = {
      comments:[
         {
            name:"Tom",
            content:"React挺好的啊"
         },
         {
            name:"Rose",
            content:"React太难了啦"
         }
      ]
   } */

   //声明周期函数中使用PubSub.subscribe订阅消息(绑定事件)
   componentDidMount(){  //已经插入回调开启监听，发送Ajax请求
      //订阅消息
      /* PubSub.subscribe('deleteComment',(msg, index) => {
         this.delComment(index)
      }) */

      PubSub.subscribe('deleteComment', this.props.commentsAsync())

   }

   /* addComment = (comment) => {
      const {comments} = this.props
      comments.unshift(comment)

      //添加新数据后需要更新状态
      this.setState({
         comments:comments
      })
   }

   delComment = (msg, index) => {
      const {comments} = this.props
      comments.splice(index,1)

      //删除新数据后也需要更新状态
      this.setState({
         comments:comments
      })
   } */

   render(){
      const {comments,addComment} = this.props
      return(
         <div className="comment">
            <h3 className="comment_title">请发表对React的评论</h3>
            <CommentAdd addComment={addComment} />
            <CommentList comments={comments} />
         </div>
      )
   }
}
