import React from 'react';
// import './App.css';

import './css/common.css';
import './css/Top.css';

// import { ParallaxProvider } from 'react-scroll-parallax';
import Box from '@mui/material/Box';

import {
  Typing,
  useTyping
} from './components/typing';

function Top() {
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

  typeStart('');

  return (
    <Box className="mainContent top">
      <Box className="topContent">
      <Typing
        className="msg-box"
        speed={80}
        typeEnd={doSomething}
        {...params}
      />
        {/* <Box className="row1">はじめまして！</Box> */}
        {/* <div className="row2">たまなっつの　ポートフォリオの　せかいへ</div> */}
        {/* <div className="row3">ようこそ！</div> */}
      </Box>
    </Box>
  );
}

export default Top;
