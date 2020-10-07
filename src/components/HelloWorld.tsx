import React, { useContext } from 'react';
import { ThemeContext } from '../App';

interface IHelloWorldProps {
  msg: string;
}

// const style = theme

const HelloWorld: React.FC<IHelloWorldProps> = (props) => {
  const theme = useContext(ThemeContext);

  return <h2 style={theme}>{props.msg}</h2>;
};

export default HelloWorld;
