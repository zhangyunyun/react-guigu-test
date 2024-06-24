import React from 'react'

const messageDetails = [
   {id: 1, title: 'Message001', content: '我爱你, 中国'},
   {id: 3, title: 'Message003', content: '我爱你, 老婆'},
   {id: 6, title: 'Message006', content: '我爱你, 孩子'},
]

//const message = messageDetails.find((m,index) => {})

export default function MessageDetail(props){
   //console.log(props)
   const {id} = props.match.params  //数据类型是字符串，*1转换成整数
   const message = messageDetails.find(m => m.id===id*1) 
   return(
      <ul>
         <li>ID:{message.id}</li>
         <li>title:{message.title}</li>
         <li>content:{message.content}</li>
      </ul>
   )
}