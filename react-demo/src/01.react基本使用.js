import React from "react"
import ReactDOM from "react-dom"

const element = React.createElement(
  'div',
  { id: 'demo', className: 'aa' },
  '我是内容'
)

ReactDOM.render(element, document.getElementById('root'))
