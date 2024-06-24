/* 
   1.react-rdux UI组件
     不需要任何redux组件，纯组件
*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './counter.css'

export default class Counter extends Component {
   //指定属性值的类型和必要性
   static propTypes = {
      count:PropTypes.number.isRequired,
      increment:PropTypes.func.isRequired,
      decrement:PropTypes.func.isRequired,
      incrementAsync:PropTypes.func.isRequired
   }

   increment = () => {
      //1. 获取到select中选取的值
      const number = this.selectNum.value * 1
      //2.通知store.dispatch分发action事件(分发事件需传入type类型名和传递的数据data)
      //  通过action creator创建的工厂函数，得到一个新的状态
      this.props.increment(number)
   }

   decrement = () => {
      //1. 获取到select中选取的值
      const number = this.selectNum.value * 1
      //2.通知store.dispatch分发action事件(分发事件需传入type类型名和传递的数据data)
      //  通过action creator创建的工厂函数，得到一个新的状态
      this.props.decrement(number)
   }

   incrementIfOdd = () => {
      //1. 获取到select中选取的值
      const number = this.selectNum.value * 1
      //2.获取reducers中state初始状态值
      const count = this.props.count;
      //3.如果是奇数就增加,更新状态
      if(count%2===1){
         //4.通知store.dispatch分发action事件(分发事件需传入type类型名和传递的数据data)
         //  通过action creator创建的工厂函数，得到一个新的状态
         this.props.increment(number)
      }
   }

   incrementAsync = () => {
      //1. 获取到select中选取的值
      const number = this.selectNum.value * 1
      //2.延迟更新状态
      this.props.incrementAsync(number)
   }

   render() {
      const {count} = this.props
      return (
         <div className="state">
            <h3 className="state_title">redux状态管理</h3>
            <div className="state_cont">
               <div className="click_txt">
                  click <span>{count}</span> times
            </div>
               <div className="click_operate">
                  <select ref={select => this.selectNum = select}>
                     <option value="1">1</option>
                     <option value="2">2</option>
                     <option value="3">3</option>
                  </select>
                  <p>
                     <button onClick={this.increment}>+</button>
                     <button onClick={this.decrement}>-</button>
                     <button onClick={this.incrementIfOdd}>increment if odd</button>
                     <button onClick={this.incrementAsync}>increment async</button>
                  </p>
               </div>
            </div>
         </div>
      )
   }
}