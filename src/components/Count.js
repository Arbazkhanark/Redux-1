import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Count = () => {
    const count=useSelector((state)=>state)
    const dispatch=useDispatch();
  return (
    <div>
        <h1>Redux Demo</h1>
        <button onClick={()=>dispatch({type:"INC",payload:1})}>+</button>
        <p>Count:{count}</p>
        <button onClick={()=>dispatch({type:"DEC"})}>-</button>
    </div>
  )
}

export default Count