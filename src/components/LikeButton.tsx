import React, { useState, useEffect, useRef, useContext } from 'react';

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [btnStatus, setBtnStatus] = useState(true);

  useEffect(() => {
    document.title = `${like} likes`;
  }, [like]);

  const didMountRef = useRef<boolean>(false);
  useEffect(() => {
    if (didMountRef.current) {
      console.log('组件已经挂载');
    } else {
      didMountRef.current = true;
      console.log('刚刚挂载');
    }
  });

  const domRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    domRef.current?.focus();
  });

  return (
    <div>
      <input ref={domRef}></input>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        👍 {like}
      </button>

      <button onClick={() => setBtnStatus(!btnStatus)}>
        {btnStatus ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default LikeButton;
