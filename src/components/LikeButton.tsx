import React, { useState, useEffect } from 'react'

import useMousePosition from '../hooks/useMousePosition'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [btnStatus, setBtnStatus] = useState(true)

  const mousePosition = useMousePosition()

  useEffect(() => {
    console.log('running')

    document.title = `${like} likes`
  }, [like])

  return (
    <div>
      <h2>
        X: {mousePosition.x} Y: {mousePosition.y}
      </h2>
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button onClick={() => setBtnStatus(!btnStatus)}>{btnStatus ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default LikeButton
