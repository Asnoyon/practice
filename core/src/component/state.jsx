import React, { useState } from 'react'

const State = () => {
    const [count,setCount]=useState(0);
    const handleClick = ()=>{
        setCount((prev)=>prev+1)
        
    }
    const handleMinusClick = ()=>{
        if(count!==0){
            setCount(count-1)
        }
    }
  return (
    <>
        <div>
            <button onClick={handleMinusClick}>-</button>
            <h1>{count}</h1>
            {/* <button onClick={()=>handleClick(2)}>+</button> */}
            <button onClick={handleClick}>+</button>
        </div>
    </>
  )
}

export default State