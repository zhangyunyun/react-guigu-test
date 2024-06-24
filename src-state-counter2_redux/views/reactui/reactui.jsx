import React,{Component} from 'react'
// 分别引入需要使用的组件
// import Button from 'antd-mobile/lib/button'
// import Toast from 'antd-mobile/lib/toast'
//按需打包
import { Button, Toast } from 'antd-mobile';

import './reactui.css'

export default class ReactUI extends Component{
   handleToast = () => {
      console.log('111')
      Toast.loading('Loading...', 3, () => {
         console.log('加载完成！！！')
      }, true);
   }
   render(){
      return (
         <div className="ui">
            <h3 className="ui_title">React UI组件库</h3>
            <div className="ui_cont">
               <Button className="p" onClick={this.handleToast}>提交</Button>
            </div>
         </div>
      )
   }
}