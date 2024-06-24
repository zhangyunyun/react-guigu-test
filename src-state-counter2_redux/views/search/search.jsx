import React,{Component} from 'react'

import SearchHeader from '../../components/search/search-header/search-header'
import SearchList from '../../components/search/search-list/search-list'

import './search.css'

///////////////////////////////组件间传递数据  使用subscribre(消息订阅)和publish(消息发布)//////////////////////////////
//1.定义组件
export default class Search extends Component{
   render(){
      return(
         <div className="search">
            <h3 className="search_title">Search Github Users</h3>
            {
               /* 
                  <SearchHeader setSearchName={this.setSearchName}></SearchHeader>
                  <SearchList searchName={searchName}></SearchList>
               */
            }
            <SearchHeader />
            <SearchList />
         </div>
      )
   }
}