import reactDOM from 'react-dom'
import Com from './components/Com'
import Fun from './components/Fun'
import AddCount from './components/addCount'

const ele = (
  <div>
    <Com></Com>
    <Fun></Fun>
    <AddCount></AddCount>
  </div>
)

reactDOM.render(ele,document.getElementById('root'))