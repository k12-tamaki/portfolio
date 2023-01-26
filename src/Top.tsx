import { useEffect } from 'react';

import './css/common.css';
import './css/Top.css';

import { Parallax } from 'react-scroll-parallax';
import Box from '@mui/material/Box';

import {
  Typing,
  useTyping
} from './components/typing';

function Top() {
  const message1 = "Welcome To Tama's Portfolio";
  const {
    typeStart,
    inputRock,
    typeEnd,
    ...params
  } = useTyping();

  const doSomething = () => {
    if (params.message) {
      console.log('Type End!');
    }
    typeEnd();
  };

  useEffect(() => {
    typeStart(message1);
    console.log('Type Start!');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Parallax speed={-30}>
      <Box className="mainContent top">
        <Box className="topContent">
          <Typing
            className="msg-box"
            speed={80}
            typeEnd={doSomething}
            cursor={true}
            {...params}
          />
        </Box>
      </Box>
    </Parallax>
  );
}

export default Top;
