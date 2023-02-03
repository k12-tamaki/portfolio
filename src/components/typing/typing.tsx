import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
// import PropTypes from 'prop-types';

const Typing: React.FC<{
  message: string;
  typeEnd: () => void;
  cursor: boolean;
  className: string;
  speed: number | undefined;
}> = ({ message, typeEnd, cursor = true, className = '', speed = 1 }) => {
  const [text, setText] = useState('');

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
    <Box
      className={className + (cursor ? ' cursor-blink' : '')}
      style={{ whiteSpace: 'pre-line' }}
    >
      {text}
    </Box>
  );
};

// Typing.propTypes = {
//   message: PropTypes.string.isRequired,
//   typeEnd: PropTypes.func.isRequired,
//   cursor: PropTypes.bool,
//   className: PropTypes.string,
//   speed: PropTypes.number
// };

export default Typing;
