import React, {
  useState,
  useEffect
} from 'react';
import PropTypes from 'prop-types';

const Typing = ({
  message,
  typeEnd,
  cursor = true,
  className = '',
  speed = 1
}) => {

  const [text, setText] = useState('');

  useEffect(() => {
    const charItr = message[Symbol.iterator]();
    let timerId;

    (function showChar() {
      const nextChar = charItr.next();
      if (nextChar.done) {
        typeEnd();
        return;
      }
      setText(current => current + nextChar.value);

      timerId = setTimeout(showChar, speed);
    }());

    return () => clearTimeout(timerId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={className + (cursor ? ' cursor-blink' : '')}
      style={{ whiteSpace: 'pre-line' }}
    >
      {text}
    </div>
  );
};

Typing.propTypes = {
  message: PropTypes.string.isRequired,
  typeEnd: PropTypes.func.isRequired,
  cursor: PropTypes.bool,
  className: PropTypes.string,
  speed: PropTypes.number
};

export default Typing;