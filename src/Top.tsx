import { useEffect } from 'react';

import './css/common.css';
import './css/Top.css';

// import { ParallaxProvider } from 'react-scroll-parallax';
import Box from '@mui/material/Box';

import Input from './input';

import {
  Typing,
  useTyping
} from './components/typing';

// const [value, setValue] = useState('');

function Top() {
  const message1 = 'はじめまして！\nたまなっつの　ポートフォリオの　せかいへ\nようこそ！';
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
    <Box className="mainContent top">
      <Box className="testCss">
        アアアアア
      </Box>
      <Box className="topContent">
        <Typing
          className="msg-box"
          speed={80}
          typeEnd={doSomething}
          {...params}
        />
      </Box>
    </Box>
  );
}

export default Top;
