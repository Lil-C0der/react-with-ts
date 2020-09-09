import React from 'react'

interface IHelloWorldProps {
  msg: string
}
const HelloWorld: React.FC<IHelloWorldProps> = (props) => {
  return <h2>{props.msg}</h2>
}

export default HelloWorld
