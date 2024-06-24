import React,{Component} from 'react'

import CommentAdd from './comment-add/comment-add'
import CommentList from './comment-list/comment-list'

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

   //添加列表方法
   addComment = (comment) => {
      //获取状态数据
      const {comments} = this.state

      //修改状态数据
      comments.unshift(comment)

      //更新状态
      this.setState({
         comments:comments
      })
   }

   //删除列表方法
   delComment = (index) => {
      const {comments} = this.state

      //删除一条数据
      comments.splice(index,1)

      //更新状态
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
            <CommentList comments={comments} delComment={this.delComment}/>
         </div>
      )
   }
}