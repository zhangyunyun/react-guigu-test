import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

//非路由组件
import MyNavLink from './components/navlink/navlink'
//路由组件
import Comment from './views/comment/comment'
import Search from './views/search/search'
import Road from './views/road/road'
import ReactUI from './views/reactui/reactui'
import State from './views/state/state'

import LogoImg from './logo.svg'
import './app.css'

export default class App extends Component{
   state = {
      currentIndex:4,
      tabs:[
         {
            tabName:'评论',
            link:'/comment'
         },
         {
            tabName:'搜索',
            link:'/search'
         },
         {
            tabName:'路由',
            link:'/road'
         },
         {
            tabName:'React UI',
            link:'/reactui'
         },
         {
            tabName:'状态',
            link:'/state'
         }
      ],
      routes:[
         {
            path:'/comment',
            component:Comment
         },
         {
            path:'/search',
            component:Search
         },
         {
            path:'/road',
            component:Road
         },
         {
            path:'/reactui',
            component:ReactUI
         },
         {
            path:'/state',
            component:State
         }
      ]
   }

   handleClick = (id) => {
      this.setState({
         currentIndex:id
      })
   }

   render(){
      const {tabs, routes, currentIndex} = this.state
      const {store} = this.props
      return (
         <div className="app">
            <img className="app_logo" src={LogoImg} alt="" />
            <h2 className="app_title">Hello React</h2>
            <ul className="app_link">
               {
                  tabs.map((tab,index) => (
                     <li className={currentIndex===index?'current':''} key={tab.link} onClick={this.handleClick.bind(this,index)}>
                        <MyNavLink to={tab.link}>{tab.tabName}</MyNavLink>
                     </li>
                  ))
               }
               {
                  /* 
                     <li onClick={this.handleClick()}>
                        <NavLink to='/commont'>评论</NavLink>
                     </li>
                     <li onClick={this.handleClick()}>
                        <NavLink to='/search'>搜索</NavLink>
                     </li>
                  */
               }
            </ul>
            <div className="app_route">
               <Switch>
                  {
                     routes.map((route,index) => {
                        return <Route key={index} path={route.path} component={route.component} store={store} />
                     })
                  }
                  <Redirect to='/state' />
               </Switch>
               { 
                  /* 显示路由组件 */
                  /* 
                     <Switch>
                        <Route path='/comment' component={Comment} />
                        <Route path='/search' component={Search} />
                        <Redirect to='/comment' />
                     </Switch>
                  */
               }
            </div>
         </div>
      )
   }
}