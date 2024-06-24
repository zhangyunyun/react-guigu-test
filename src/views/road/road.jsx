import React,{Component} from 'react'
import {Route, Redirect, Switch} from 'react-router-dom'

import MyNavLink from '../../components/navlink/navlink'
import News from '../road/news/news'
import Message from '../road/message/message'

import './road.css'

export default class Road extends Component{
   state = {
      currentIndex:1,
      tabs:[
         {
            id:1,
            tabName:'新闻',
            link:'/road/news'
         },
         {
            id:2,
            tabName:'消息',
            link:'/road/message'
         }
      ],
      routes:[
         {
           path:'/road/news',
           component:News 
         },
         {
            path:'/road/message',
            component:Message
          }
      ]
   }

   handleClick = (id) =>{
      this.setState({
         currentIndex:id
      })
   }

   render(){
      const {tabs, routes, currentIndex} = this.state
      return (
         <div className="road">
            <h3 className="road_title">React Router Demo</h3>
            <div className="road_cont">
               <ul className="roadTab">
                  {
                     tabs.map(tab => (
                        <li key={tab.link} className={currentIndex===tab.id?'current':''} onClick={this.handleClick.bind(this,tab.id)}>
                           <MyNavLink to={tab.link}>{tab.tabName}</MyNavLink>
                        </li> 
                     ))
                  }
               </ul>
               <div className="roadPanel">
                  <Switch>
                     {
                        routes.map(route => {
                           return <Route key={route.path} path={route.path} component={route.component} />
                        })
                     }
                     <Redirect to='/road/news' />
                  </Switch>
               </div>
            </div>
         </div>
      )
   }
}