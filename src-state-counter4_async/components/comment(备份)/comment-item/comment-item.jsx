import React,{Component} from 'react'
import PropTypes from 'prop-types'

import './commentItem.css'

export default class CommentItem extends Component{

   //给组件添加属性
   static propTypes={
      comment:PropTypes.object.isRequired,
      delComment:PropTypes.func.isRequired,
      index:PropTypes.number.isRequired
   }

   //点击删除
   handleClick = () =>{
      const {comment,delComment,index} = this.props
      if(window.confirm(`确定删除${comment.name}此条记录吗？`)){
         delComment(index)
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