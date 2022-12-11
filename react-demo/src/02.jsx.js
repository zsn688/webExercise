// import React from "react"
import ReactDOM from 'react-dom'

import './css/index.css'
// const ele = React.createElement('ul',{ className: 'list'},[React.createElement('li',null,'香蕉')])
// const list = [
//   { id: 1, name: 'zs', salary: 15000 },
//   { id: 2, name: 'ds', salary: 17000 },
//   { id: 3, name: 'hs', salary: 19000 },
// ]
// const element = (
//   <ul>
//     {list.map((item) => {
//       return (
//         <li>
//           <h3>{item.name}</h3>
//           <p>{item.salary}</p>
//         </li>
//       )
//     })}
//   </ul>
// )

const list = [
  { id: 1, name: "刘德华", content: "给我一杯忘情水" },
  { id: 2, name: "五月天", content: "不打扰，是我的温柔" },
  { id: 3, name: "毛不易", content: "像我这样优秀的人" }
];
const element = (
  <ul>
    {list.map((item) => {
      return (
        <li className='title'>
          <h4>{item.name}</h4>
          <p>{item.content}</p>
        </li>
      )
    })}
  </ul>
)



ReactDOM.render(element, document.getElementById('root'))
