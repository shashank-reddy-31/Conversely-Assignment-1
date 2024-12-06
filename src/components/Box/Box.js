import React from 'react'
import './Box.css'

const Box = ({isActive, onClick}) => {
  let backgroundColor = 'lightgray'
  if (isActive === true) {
    backgroundColor = 'green'
  } else if (isActive === 'orange') {
    backgroundColor = 'orange'
  }

  return <div style={{backgroundColor}} className="box" onClick={onClick}></div>
}

export default Box
