import React from 'react'
import ComponentB from './ComponentB'

// const ComponentA = ({name}) => { ->> PROP DRILLING
const ComponentA = () => { // ->> CONTEXT API
  return (
    <div>
        {/* prop drillig */}
        {/* <ComponentB name = {name} /> */} 

        {/* context api */}
        <ComponentB /> 
    </div>
  )
}

export default ComponentA