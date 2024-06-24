import React,{Component} from 'react'

import SearchHeader from '../search/search-header/search-header'
import SearchList from '../search/search-list/search-list'

import './search.css'

///////////////////////////////组件间传递数据  使用props方式//////////////////////////////
//1.定义组件
export default class Search extends Component{

   //初始化状态
   state = {
      searchName:''
   }

   setSearchName = (searchName) => {
      //更新状态
      this.setState({
         searchName:searchName
      })
   }

   render(){
      const {searchName} = this.state
      return(
         <div className="search">
            <h3 className="search_title">Search Github Users</h3>
            <SearchHeader setSearchName={this.setSearchName}/>
            <SearchList searchName={searchName} />
         </div>
      )
   }
}