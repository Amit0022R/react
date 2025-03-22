import { useState } from "react"

const Counter = () => {

    const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times baby</p>
      <button onClick={() => setCount(c => c + 1 )} >Increment</button>
      <button onClick={() => setCount(c => c - 1 )} >Decrement</button>
    </div>
  )
}

export default Counter
