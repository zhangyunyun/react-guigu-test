import React,{Component} from 'react'
import PropTypes from 'prop-types'

import './commentAdd.css'

export default class CommentAdd extends Component{
   //构造器，初始化显示状态
   /* constructor(props){
      super(props)
      this.state = {
         name:"",
         content:""
      }

      //自定义方法的this强制绑定到组件对象上
      // this.handleNameChange = this.handleNameChange.bind(this)
      // this.handleContentChange = this.handleContentChange.bind(this)
      // this.handleSubmit = this.handleSubmit.bind(this)
   }*/

   static propTypes = {
      addComment:PropTypes.func.isRequired
   }

   state = {
      name:'',
      content:''
   }

   handleNameChange = (event) =>{
      const name = event.target.value
      this.setState({name})
   }

   handleContentChange = (event) =>{
      const content = event.target.value
      this.setState({content})
   }

      
   //点击提交按钮
   handleSubmit = (event) =>{
      event.preventDefault()

      //comment存储表单收集结果
      const comment = this.state 
      
      //获取父元素传递的方法
      const {addComment} = this.props 

      //将数据传递到父元素
      addComment(comment)

      //更新状态
      this.setState({
         name:"",
         content:""
      })
   }

   render(){
      const {name, content} = this.state
      return(
         <div className="adds">
            <dl className="adds-show">
               <dt>用户名</dt>
               <dd><input type="text" placeholder="用户名" value={name} onChange={this.handleNameChange}/></dd>
               <dt>评论内容</dt>
               <dd>
                  <textarea placeholder="评论内容" value={content} onChange={this.handleContentChange}></textarea>
               </dd>
            </dl>
            <div className="adds-btn">
               <button onClick={this.handleSubmit}>提交</button>
            </div>
         </div>
      )
   }
}