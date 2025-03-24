import React from 'react'
import ComponentC from './ComponentC'

// const ComponentB = ({name}) => { // ->> PROP DRILLING
const ComponentB = () => { // ->> CONTEXT API
  return (
    <div>
        {/* prop drillig */}
      {/* <ComponentC name = {name} /> */}
      
        {/* context api */} 
      <ComponentC/>

    </div>
  )
}

export default ComponentB
