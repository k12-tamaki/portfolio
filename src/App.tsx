import React from 'react';

// Mui
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Parallax
import { ParallaxProvider } from 'react-scroll-parallax';

// Component
import Header from 'components/header';
import Top from 'Top';
import Profile from 'Profile';
import Career from 'Career';
import Skill from 'Skill';

// BackGround
import BackGroundImage from 'media/background.jpg';

// Emotion
/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { style } from 'css/style';

// CSS
const FontCss = css({
  color: '#F4FBFE',
  font: 'Consolas, Monaco, monospace',
});

const BackGroundCss = css({
  background: `url(${BackGroundImage}) repeat`,
});

const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box css={FontCss}>
        <Header />
        <Box component="main" css={BackGroundCss}>
          <Toolbar />
          <ParallaxProvider>
            <Top />
            <Profile />
            <Career />
            <Skill />
          </ParallaxProvider>
        </Box>
      </Box>
      <Global styles={style} />
    </ThemeProvider>
  );
};

export default App;
