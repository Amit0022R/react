import { useEffect } from "react"


const BasicEffect = () => {
    useEffect(() => {
        console.log("Component Mounted");
        
    }, [] )
  return <div>
    <h1>Check console to se message</h1>
  </div>
}

export default BasicEffect
