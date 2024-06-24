import React,{Component} from 'react'
import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

import './commentItem.css'

export default class CommentItem extends Component{
   //接收父组件传递的数据
   static propTypes = {
      comment:PropTypes.object.isRequired,
      index:PropTypes.number.isRequired
   }

   //点击删除按钮删除当前数据
   handleClick = () =>{
      const {comment, index} = this.props
      if(window.confirm(`确定删除${comment.name}此条记录吗？`)){
         //delComment(index)

         //使用PubSub.publish发布消息(触发事件)
         PubSub.publish('deleteComment',index)
      }
   }

   //重写组件类方法，组件类中自带的方法
   render(){
      const {comment} = this.props
      return(
         <dl className="item">
            <dt>
               <span>{comment.name}</span>说:
               <button onClick={this.handleClick}>删除</button>
            </dt>
            <dd>{comment.content}</dd>
         </dl>
      )
   }
}

/* CommentList.propTypes={
   comments:PropType.array.isRequired
} */