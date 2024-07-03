import React from 'react'
import Proptypes from 'prop-types'

const PropTypesComponent = ({name, age, isAlive}) => {
  return (
    <div>
      <h1>Props Types Component</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is Alive: {isAlive ? 'yes' : 'No'}</p>
    </div>
  )
}

PropTypesComponent.propTypes = {
    name : Proptypes.string.isRequired, // ademas es obligatiro.
    age : Proptypes.number,
    isAlive : Proptypes.bool
}


export default PropTypesComponent
