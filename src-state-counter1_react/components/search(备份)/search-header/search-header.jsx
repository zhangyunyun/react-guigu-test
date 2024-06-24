import React,{Component} from 'react'
import PropTypes from 'prop-types'

import './searchHeader.css'

export default class SearchHeader extends Component{

   static propTypes = {
      setSearchName:PropTypes.func.isRequired,
   }

   state = {
      searchName:''
   }

   //监听input的值变化
   handleChange = (event) => {
      const searchName = event.target.value
      this.setState({
         searchName:searchName
      })
   }

   //点击搜索按钮
   handleSearch = () => {
      const {searchName} = this.state
      const {setSearchName} = this.props
      if(searchName){
         setSearchName(searchName)
      }
   }

   //重写组件类方法，组件自带的方法
   render(){
      return(
         <div className="searchHeader">
            <div className="search-runing">
               <input type="text" placeholder="enter the name you search" onChange={this.handleChange}/>
               <button onClick={this.handleSearch}>搜索</button>
            </div>
         </div>
      )
   }
}