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

   //接收并检测组件传过来的方法或属性的必要性
   static propTypes = {
      addComment:PropTypes.func.isRequired 
   }

   //给组件对象指定属性
   state = {
      name:"",
      content:""
   }

   //获取输入的用户名信息
   handleNameChange = (event) => {
      const name = event.target.value
      this.setState({
         name:name
      })
   }

   //获取输入的内容信息
   handleContentChange = (event) => {
      const content = event.target.value
      this.setState({
         content:content
      })
   }

   //提交表单
   handleSubmit = (event) => {
      event.preventDefault()
      //收集数据,分装到comment中
      const comment = this.state
      this.props.addComment(comment)   
      //更新状态
      this.setState({
         name:"",
         content:""
      })
   }

   render(){
      const {name,content} = this.state
      return(
         <div className="adds">
            <dl className="adds-show">
               <dt>用户名</dt>
               <dd><input type="text" placeholder="用户名" value={name} onChange={this.handleNameChange} /></dd>
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