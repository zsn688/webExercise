import { Component } from "react"

class AddCount extends Component{
  state = {
  count: 0
}
  add = () => {
    // console.log('1')
    this.setState({
      count: this.state.count + 1
    })
    // console.log(this.state.count)
  }
  backZero = () => {
    this.setState({
      count: 0
    })
  }
  render() {
    return (
      <div>
        <div>number: {this.state.count}</div>
        <button onClick={this.add}>add one</button>
        <button onClick={this.backZero}>清零</button>
      </div>
    )
  }
}

export default AddCount