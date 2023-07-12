import React from 'react'
import Count from './components/Count'

const App = () => {
  return (
    <div>App
      <Count /> 
     </div>
  )
}

export default App;


//STORE  -- holds the updated value from reducer
//REDUCER -- updates the state based on action-type passed from UI
//UI     -- Subscribe to store and gets updated component