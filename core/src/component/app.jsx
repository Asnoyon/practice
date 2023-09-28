import React, { Component } from 'react'

export class AppC extends Component {

   state={
    count:0
   }

   intervalId = null

   increment=()=>{
    this.setState({count: this.state.count+1})
   }
   decrement = ()=>{
    if(this.state.count>0){
        this.setState({count: this.state.count-1})
    }
   }

   startTimer=()=>{
    if(this.state.count>0 && !this.intervalId){
       this.intervalId= setInterval(() => {
        this.setState({count: this.state.count - 1}, ()=>{
            if(this.state.count===0){
                alert('Timer finished')
                clearInterval(this.intervalId)
                this.intervalId=null
            }
        })
    }, 1000);
    }
   }

   stopTimer=()=>{
    if(this.intervalId){
        clearInterval(this.intervalId);
        this.intervalId=null
    }
   }
   resetTimer=()=>{
        this.setState({count:0})
        clearInterval(this.intervalId)
        this.intervalId=null
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
            <div className="container_2">
                <button className='down' onClick={this.startTimer}>Start</button>
                <button className='down'onClick={this.stopTimer}>Stop</button>
                <button className='down' onClick={this.resetTimer}>Reset</button>
            </div>
        </div>
      </div>
    )
  }
}

export default AppC