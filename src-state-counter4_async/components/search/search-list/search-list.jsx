import React,{Component} from 'react'
//import PropTypes from 'prop-types'
import Axios from 'axios'
import PubSub from 'pubsub-js'

import './searchList.css'

export default class SearchList extends Component{

  /* static propTypes = {
    searchName:PropTypes.string.isRequired
  } */

  state = {
    initView:true,  //没有数据，就提示请输入搜索关键字
    isLoading:false, //正在加载中点击按钮后设置为true
    users:null,     //默认为null，将要存储搜索请求的结果
    errorMsg:null  //默认为null，如果请求出错了，就赋值
  }

  //声明周期函数,已经插入回调开启监听
  componentDidMount(){
    //使用PubSub.subscribe订阅消息(绑定事件)
    PubSub.subscribe('searchList',(msg, searchName) => {
      this.setState({
        //改变状态
        initView:false,
        isLoading:true
      })
      //开始请求数据
      const url = `https://api.github.com/search/users?q=${searchName}` 
      Axios.get(url).then(response => {
        const result = response.data
        const users = result.items.map(item => {
          return {
            name:item.login,
            linkUrl:item.html_url,
            avatarUrl:item.avatar_url
          }
        })
        //更新状态(成功)
        this.setState({
          isLoading:false,
          users:users
        })
      }).catch(err => {
          //更新状态(失败)
          this.setState({
            isLoading:false,
            errorMsg:err.messages
          })
      })
    })
  }

  //判断这个值是否改变，不改变不发送请求
  //  newProps代表这次的props值
  //  this.props代表上次props的值
  /* componentWillReceiveProps(newProps){
    const {searchName} = newProps
    this.setState({
      //改变状态
      initView:false,
      isLoading:true
    })
    //开始请求数据
    const url = `https://api.github.com/search/users?q=${searchName}` 
    Axios.get(url).then(response => {
      const result = response.data
      const users = result.items.map(item => {
        return {
          name:item.login,
          linkUrl:item.html_url,
          avatarUrl:item.avatar_url
        }
      })
      //更新状态(成功)
      this.setState({
        isLoading:false,
        users:users
      })
    }).catch(err => {
        //更新状态(失败)
        this.setState({
          isLoading:false,
          errorMsg:err.messages
        })
    })
  } */

  render(){
    const {initView,isLoading,users,errorMsg} = this.state
    if(initView){
      return <div className="searchTip">请输入搜索关键字</div>
    }
    else if(isLoading){
      return <div className="searchTip">加载中,请稍后...</div>
    }
    else if(errorMsg){
      return <div className="searchTip">没有搜索到内容</div>
    }
    else{
      return (
        <div className="searchList"> 
            {
              users.map((user,index) => (
                <div className="card" key={index}>
                  <a href={user.linkUrl}>
                    <img src={user.avatarUrl} alt="" />
                    <p className="card-text">{user.name}</p>
                  </a>
                </div>
              ))
            }
        </div>
      )
    }
  }
}
