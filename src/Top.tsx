import React, { useEffect } from 'react';

import './css/common.css';
import './css/Top.css';

import { Parallax } from 'react-scroll-parallax';
import Box from '@mui/material/Box';

import { Typing, useTyping } from './components/typing';

const Top: React.FC = () => {
  const message1 =
    "Welcome To Tama's Portfolio\nここは「タマ」のポートフォリオです";
  const {
    typeStart,
    // inputRock,
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
  }, []);

  return (
    <Parallax speed={-10}>
      <Box className="mainContent content">
        <Box className="top">
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
};

export default Top;
