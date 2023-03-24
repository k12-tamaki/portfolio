import React, { useEffect } from 'react';

// Mui
import Box from '@mui/material/Box';

// Parallax
import { Parallax } from 'react-scroll-parallax';

// Component
import { Typing, useTyping } from './components/typing';

// Emotion
import { css } from '@emotion/react';

// CSS
const SizeCss = css({
  width: '80%',
  height: '60%',
});

const Top: React.FC = () => {
  const message1 =
    "Welcome To Tama's Portfolio\nここは「タマ」のポートフォリオです";

  // Type Layout
  const { typeStart, typeEnd, ...params } = useTyping();

  // Type End
  const doSomething = () => {
    if (params.message) {
      console.log('Type End!');
    }
    typeEnd();
  };

  // Type Start
  useEffect(() => {
    typeStart(message1);
    console.log('Type Start!');
  }, []);

  // ToDo: Container使えば中央できる？
  return (
    <Parallax speed={-10}>
      <Box className="mainContent content" id="Top">
        <Box css={SizeCss}>
          <Typing speed={80} typeEnd={doSomething} cursor={true} {...params} />
        </Box>
      </Box>
    </Parallax>
  );
};

export default Top;
