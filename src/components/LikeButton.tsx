import React, { useState, useEffect, useRef, useContext } from 'react'

import useMousePosition from '../hooks/useMousePosition'

import { ThemeContext } from '../App'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [btnStatus, setBtnStatus] = useState(true)

  const domRef = useRef<HTMLButtonElement>(null)

  const mousePosition = useMousePosition()

  // const theme = useContext()

  useEffect(() => {
    document.title = `${like} likes`
  }, [like])

  useEffect(() => {
    // const btn = domRef.current
    // btn?.click()
    if (domRef && domRef.current) {
      const btn = domRef.current
      btn.click()
    }
  }, [])

  return (
    <div>
      {/* <ThemeContext.Consumer> */}
      <h2>
        X: {mousePosition.x} Y: {mousePosition.y}
      </h2>
      <button
        ref={domRef}
        onClick={() => {
          setLike(like + 1)
        }}
      >
        👍 {like}
      </button>
      <button onClick={() => setBtnStatus(!btnStatus)}>{btnStatus ? 'ON' : 'OFF'}</button>
      {/* </ThemeContext.Consumer> */}
    </div>
  )
}

export default LikeButton
