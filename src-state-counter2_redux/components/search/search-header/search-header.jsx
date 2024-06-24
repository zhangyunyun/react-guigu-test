import React,{Component} from 'react'
//import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

import './searchHeader.css'

export default class SearchHeader extends Component{

   /* static propTypes = {
      setSearchName:PropTypes.func.isRequired
   } */

   //初始化状态
   state = {
      searchName:''
   }

   //获取文本框输入的值
   handleChange = (event) =>{
      const nameVal = event.target.value

      this.setState({
         searchName:nameVal
      })
   }

   //点击搜索按钮
   handleClick = () =>{
      const {searchName} = this.state
      if(searchName){
         //this.props.setSearchName(searchName)

         //使用PubSub.publish发布消息(触发事件)
         PubSub.publish('searchList',searchName)
      }
   }

   render(){
      return(
         <div className="searchHeader">
            <div className="search-runing">
               <input type="text" placeholder="enter the name you search" onChange={this.handleChange} />
               <button onClick={this.handleClick}>搜索</button>
            </div>
         </div>
      )
   }
}

