import React,{Component} from 'react'
import PubSub from 'pubsub-js'

import CommentAdd from '../../components/comment/comment-add/comment-add'
import CommentList from '../../components/comment/comment-list/comment-list'

import './comment.css'

export default class Comment extends Component{
   /* constructor(props){
      super(props)
      this.state = {
         commentList:[
            {
               username:"Tom",
               content:"React挺好的"
            },
            {
               username:"Rose",
               content:"React太难了"
            }
         ]
      }
   } */

   //给组件对象指定属性
   state = {
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
   }

   //声明周期函数中使用PubSub.subscribe订阅消息(绑定事件)
   componentDidMount(){  //已经插入回调开启监听，发送Ajax请求
      //订阅消息
      /* PubSub.subscribe('deleteComment',(msg, index) => {
         this.delComment(index)
      }) */

      PubSub.subscribe('deleteComment', this.delComment)
   }

   addComment = (comment) => {
      const {comments} = this.state
      comments.unshift(comment)

      //添加新数据后需要更新状态
      this.setState({
         comments:comments
      })
   }

   delComment = (msg, index) => {
      const {comments} = this.state
      comments.splice(index,1)

      //删除新数据后也需要更新状态
      this.setState({
         comments:comments
      })
   }

   render(){
      const {comments} = this.state
      return(
         <div className="comment">
            <h3 className="comment_title">请发表对React的评论</h3>
            <CommentAdd addComment={this.addComment} />
            <CommentList comments={comments} />
         </div>
      )
   }
}