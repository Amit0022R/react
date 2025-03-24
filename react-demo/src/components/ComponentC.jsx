import React from 'react'
import { Data1, Data2 } from '../App'
// const ComponentC = ({name}) => { // ->> PROP DRILLING
const ComponentC = () => { // ->> CONTEXT API
  return (
    // consumer means we are going to consume the data
    // also consumer take callback function which take data as argument
    <Data1.Consumer>
      { (name) => {
            // return <h1>{name}</h1>
            return (
                <Data2.Consumer>
                    {(age) => {
                        return <h1>{name} {age}</h1>
                    }}
                </Data2.Consumer>
            )
      } }
      {/* {(name) => { return <h1>{name}</h1>; }} */}
    </Data1.Consumer>

    //   or
    //     <Data.Consumer>
    //         { name => <h1>{name}</h1> }
    //     </Data.Consumer>

  )
}

export default ComponentC
