/* 
  comments评论容器组件
*/
import React from 'react'
//引入连接函数
import {connect} from 'react-redux'
//引入通过action creator创建的工厂函数
import {addComment,deleteComment,commentsAsync} from '../../redux/actions'
//引入UI组件
import Comment from '../../components/comment/comment'

export default connect(
   state => ({comments:state.comments}),
   {
      addComment:addComment,
      deleteComment:deleteComment,
      commentsAsync:commentsAsync
   }
)(Comment)
