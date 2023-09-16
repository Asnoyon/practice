import React, { Component } from 'react'

export class AppC extends Component {
   state={
    count:0
   }

   increment=()=>{
    this.setState({count: this.state.count+1})
   }
   decrement = ()=>{
    if(this.state.count>0){
        this.setState({count: this.state.count-1})
    }
   }
  render() {
    return (
      <div>
        <div className="AppC">
            <div className="Heading">
                Simple Timer
            </div>
            <div className="container">
                <button onClick={this.decrement} >-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment} >+</button>
            </div>
        </div>
      </div>
    )
  }
}

export default AppC