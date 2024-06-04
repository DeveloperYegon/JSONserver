import React, { Component } from 'react'

export class ClassCounter extends Component {
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        incrementCount=()=>{
            this.setState({count:this.state.count+1})
        }



  render() {
    return (
      <div className='w-1/2 m-auto bg-slate-500'>
        <div className='my-20 p-40'>

        <button className='border bg-black text-white' onClick={this.incrementCount}>Count:{this.state.count}</button>
        </div>
        
      </div>
    )
  }
}

export default ClassCounter