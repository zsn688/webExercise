import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

class App extends React.Component {
  state = {
    comments: [
      { id: 1, name: 'jack', content: '沙发！！！' },
      { id: 2, name: 'rose', content: '板凳~' },
      { id: 3, name: 'tom', content: '楼主好人' }
    ],
    userName: '',
    userCommit: ''
  }
  clearFn = () => {
    this.setState({
      comments: []
    })
  }
  renderCommits = () => {
    if (this.state.comments.length === 0) {
      return <div className="no-comment">暂无评论</div>
    } else {
      return <ul>
        {this.state.comments.map(item => {
          return (
            <li key={item.id}>
              <h3>评论人: {item.name}</h3>
              <p>评论内容：{item.content}</p>
              <button onClick={() => this.delFn(item.id)}>删除</button>
            </li>
          )
        })}
      </ul>
    }
  }
  delFn = (id) => {
    this.setState({
      comments: this.state.comments.filter( item => { return item.id !== id})
    })
  }
  handleFn = (e) => {
    // console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  addFn = () => {
    this.setState({
      comments: [{ id: Date.now(), name: this.state.userName, content: this.state.userCommit }, ...this.state.comments],
      userCommit: '',
      userName: ''
    })
    
  }
  render() {
    return (
      <div className="app">
        <div>
          <input className="user" type="text" placeholder="请输入评论人" value={this.state.userName} name="userName" onChange={ this.handleFn } />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            value={this.state.userCommit}
            name='userCommit'
            onChange={ this.handleFn }
          />
          <br />
          <button onClick={this.addFn}>发表评论</button>
          <button onClick={this.clearFn}>清空评论</button>
        </div>
        {this.renderCommits()}
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
