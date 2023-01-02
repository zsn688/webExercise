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
    userName: '123',
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
  render() {
    return (
      <div className="app">
        <div>
          <input className="user" type="text" placeholder="请输入评论人" value={this.userName} onChange={ this.handleFn} />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            value={this.userCommit}
          />
          <br />
          <button>发表评论</button>
          <button onClick={this.clearFn}>清空评论</button>
        </div>
        {this.renderCommits()}
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
