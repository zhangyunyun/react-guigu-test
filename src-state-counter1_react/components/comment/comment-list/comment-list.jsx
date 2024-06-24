import React,{Component} from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment-item'

import './commentList.css'

export default class CommentList extends Component{
   
   static propTypes = {
      comments:PropTypes.array.isRequired
   }

   //重写组件类方法，组件类中自带的方法
   render(){
      const {comments} = this.props
      const display = comments.length===0 ?'block':'none'
      return(
         <div className="lists">
            <div className="lists-show">
               <h3>评论回复：</h3>
               <div className="lists-cont">
                  <div className="lists-tip" style={{display}}>
                     <p>暂无评论信息哦！</p>
                  </div>
                  <div className="lists-item">
                     {
                        comments.map((c,index) => <CommentItem key={index} comment={c} index={index}/>) 
                     }
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
/* 
{
   CommentList.PropTypes={
      comments:PropTypes.array.isRequired
   }
}
*/