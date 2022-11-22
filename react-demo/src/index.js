// import React from "react"
import ReactDOM from 'react-dom'

// const ele = React.createElement('ul',{ className: 'list'},[React.createElement('li',null,'香蕉')])

let ele = (
  <div>
    <h1>hello React</h1>
    <ul>
      <li>by zsn</li>
      <li>jam</li>
      <li>stk</li>
    </ul>
  </div>
)

ReactDOM.render(ele, document.getElementById('root'))
