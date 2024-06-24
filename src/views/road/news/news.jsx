import React,{Component} from 'react'

import './news.css'

export default class News extends Component{

   state = {
      news:[
         'new01',
         'new02',
         'new03'
      ]
   }

   render(){
      const {news} = this.state
      return (
         <ul className="news">
            {
               news.map((n,index) => {
                  return <li key={index}>{n}</li>
               }) 
            }
         </ul>
      )
   }
}