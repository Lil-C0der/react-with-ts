import React from 'react'
import logo from './logo.svg'
import './App.css'

import HelloWorld from './components/HelloWorld'
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MounseTracker'

import { useState, useEffect } from 'react'

import useMousePosition from './hooks/useMousePosition'

function App() {
  const [show, setShow] = useState(true)

  const mousePosition = useMousePosition()
  // console.log(mousePosition)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld msg="hello ts" />

        <LikeButton />

        <button
          onClick={() => {
            setShow(!show)
          }}
        >
          toggle tracker
        </button>

        {show && (
          <p>
            X: {mousePosition.x} Y: {mousePosition.y}
          </p>
        )}

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
