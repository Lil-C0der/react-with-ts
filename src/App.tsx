import React from 'react';
import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/HelloWorld';
import LikeButton from './components/LikeButton';
import MouseTracker from './components/MouseTracker';

import { useState, useEffect } from 'react';
import useURLLoader from './hooks/useURLLoader';

import useMousePosition from './hooks/useMousePosition';

interface IThemeProps {
  [name: string]: {
    color: string;
    background: string;
  };
}
const theme: IThemeProps = {
  light: {
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#fff',
    background: '#3c3c3c'
  }
};

interface IShowResult {
  message: string;
  status: string;
}

export const ThemeContext = React.createContext(theme.light);

const App: React.FC = () => {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const [show, setShow] = useState(true);

  const [data, loading] = useURLLoader(url, [show]);
  const dogResult = data as IShowResult;

  const mousePosition = useMousePosition();

  return (
    <div className="App">
      <ThemeContext.Provider value={theme.light}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <HelloWorld msg="hello ts" />

          <LikeButton />

          <p>
            {loading ? (
              '正在查询'
            ) : (
              <img src={dogResult?.message} alt="dog-pic" />
            )}
          </p>

          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            Refresh Dog Pic
          </button>

          {show && (
            <p>
              X: {mousePosition.x} Y: {mousePosition.y}
            </p>
          )}

          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
