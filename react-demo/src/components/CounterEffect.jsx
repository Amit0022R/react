import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

    const [ count , setCount ] = useState(0)

    useEffect(() => {
        // browser tab title will dynamically update based on the count state.
        document.title = `Count is ${count}`
    } , [count] )

  return <div>
    <h1>Count: {count}  </h1>
    <button onClick={() => setCount(count + 1)} ><i>Increment</i></button>
  </div>
}

export default CounterEffect
