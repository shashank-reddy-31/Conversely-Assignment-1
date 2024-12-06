import React from 'react'
import Matrix from './components/Matrix/Matrix'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <h1 className="Heading">3x3 Color Matrix</h1>
      <Matrix />
    </div>
  )
}

export default App