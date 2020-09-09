import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function updateMousePosition(e: MouseEvent) {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMousePosition)
    return () => {
      console.log('remove')
      document.removeEventListener('click', updateMousePosition)
    }
  }, [])

  return (
    <p>
      X: {mousePosition.x} Y: {mousePosition.y}
    </p>
  )
}

export default MouseTracker
