import React, { Component } from 'react'

import './state.css'

export default class State extends Component {
   state = {
      count: 0
   }

   increment = () => {
      //1. 获取到select中选取的值
      const number = this.selectNum.value * 1
      //2.获取状态初始值
      const { count } = this.state_cont
      //3.更新状态
      this.setState({
         count: count + number
      })
   }

   decrement = () => {
      //1. 获取到select中选取的值
      const number = this.selectNum.value * 1
      //2.获取状态初始值
      const { count } = this.state
      //3.更新状态
      this.setState({
         count: count - number
      })
   }

   incrementIfOdd = () => {
      //1. 获取到select中选取的值
      const number = this.selectNum.value * 1
      //2.获取状态初始值
      const { count } = this.state
      //3.如果是奇数就增加,更新状态
      if(count%2===1){
         this.setState({
            count: count + number
         })
      }
   }

   incrementAsync = () => {
      //1. 获取到select中选取的值
      const number = this.selectNum.value * 1
      //2.获取状态初始值
      const { count } = this.state
      //3.延迟更新状态
      setTimeout(() =>{
         this.setState({
            count: count + number
         })
      },1000)
   }

   render() {
      const { count } = this.state
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