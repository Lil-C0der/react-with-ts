import { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function updateMousePosition(e: MouseEvent) {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', updateMousePosition)
    return () => {
      console.log('remove')
      document.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}

export default useMousePosition
