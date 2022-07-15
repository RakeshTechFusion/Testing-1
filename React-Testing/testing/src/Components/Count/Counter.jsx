import React ,{useState}from 'react'

const Counter = () => {
    const [count, setCount]=useState(0);
  return (
    <div>
      Counter
      <h3 data-testid="count-value">{count}</h3>
      <div>
        <button role='minus-button' onClick={()=>setCount(count-1)}>-</button>
        <button role='plus-button'onClick={()=>setCount(count+1)}>+</button>
      </div>
    </div>
  )
}

export default Counter
