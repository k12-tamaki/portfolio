import React, { useState, useEffect } from 'react';

// Mui
import Typography from '@mui/material/Typography';

const Typing: React.FC<{
  message: string;
  typeEnd: () => void;
  cursor: boolean;
  speed: number | undefined;
}> = ({ message, typeEnd, cursor = true, speed = 1 }) => {
  const [text, setText] = useState('');

  // 1文字ずつ表示
  useEffect(() => {
    const charItr: IterableIterator<string> = message[Symbol.iterator]();
    let timerId: NodeJS.Timer;

    (function showChar() {
      const nextChar: IteratorResult<string> = charItr.next();
      if (nextChar.done) {
        typeEnd();
        return;
      }
      setText((current) => current + nextChar.value);

      timerId = setTimeout(showChar, speed);
    })();

    return () => clearTimeout(timerId);
  }, []);

  return (
    <Typography
      className={cursor ? ' cursor-blink' : ''}
      style={{
        whiteSpace: 'pre-line',
        font: 'bold 300% Consolas, Monaco, monospace',
        position: 'absolute',
        top: '45%',
        left: '10%',
      }}
    >
      {text}
    </Typography>
  );
};

export default Typing;
