import React, {useState} from 'react'
import Box from '../Box/Box'
import './Matrix.css'
const Matrix = () => {
  const [clickedBoxes, setClickedBoxes] = useState(Array(9).fill(false))
  const [clickOrder, setClickOrder] = useState([])

  const handleBoxClick = index => {
    if (index === 8) {
      clickOrder.forEach((orderIndex, i) => {
        setTimeout(
          () => {
            setClickedBoxes(prev => {
              const newBoxes = [...prev]
              newBoxes[orderIndex] = 'orange'
              return newBoxes
            })
          },
          (i + 1) * 1000,
        )
      })
    } else {
      const newClickedBoxes = [...clickedBoxes]
      newClickedBoxes[index] = true
      setClickedBoxes(newClickedBoxes)
      setClickOrder(prevOrder => [...prevOrder, index])
    }
  }

  return (
    <div className="matrix">
      {Array.from({length: 9}).map((_, index) => (
        <Box
          key={index}
          isActive={clickedBoxes[index]}
          onClick={() => handleBoxClick(index)}
        />
      ))}
    </div>
  )
}

export default Matrix
