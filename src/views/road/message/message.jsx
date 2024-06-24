import React,{Component} from 'react'
import {Route} from 'react-router-dom'

//非路由组件
import MyNavLink from '../../../components/navlink/navlink'
//路由组件
import MessageDetail from '../../../views/road/message/message-detail'

import './message.css'

export default class Message extends Component{

   state = {
      messages:[]
   }

   //已经插入回调，开启监听，发送ajax请求(回调函数都使用箭头函数)
   componentDidMount(){
      //模拟ajax请求数据
      setTimeout(() => {
         const data = [
            {id: 1, title: 'Message001'},
            {id: 3, title: 'Message003'},
            {id: 6, title: 'Message006'}
         ]
         this.setState({messages:data})
      },1000)
   }

   handlePush = (id) => {
      this.props.history.push(`/road/message/messageDetail/${id}`)
   }

   handleReplace = (id) => {
      this.props.history.replace(`/road/message/messageDetail/${id}`)
   }

   back = () => {
      this.props.history.goBack()
   }

   forward = () => {
      this.props.history.goForward()
   }

   render(){
      const {messages} = this.state
      return (
         <div className="messageDetail">
            <ul className="messageList">
               {
                  messages.map((m,index) => (
                     <li key={index}>
                        <MyNavLink to={`/road/message/messageDetail/${m.id}`}>{m.title}</MyNavLink>
                        <button onClick={() => {this.handlePush(m.id)}}>push跳转</button>
                        <button onClick={() => this.handleReplace(m.id)}>replace跳转</button>
                     </li>
                  ))
               }
            </ul>
            <div className="messageBtn">
               <button onClick={this.back}>返回</button>
               <button onClick={this.forward}>前进</button>
            </div>
            <div className="messageContent">
               <Route path='/road/message/messageDetail/:id' component={MessageDetail} />
            </div>
         </div>
      )
   }
}  