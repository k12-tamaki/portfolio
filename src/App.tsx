import React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './components/header';
import Top from './Top';
import Profile from './Profile';
import Career from './Career';
import Skill from './Skill';

import BackGroundImage from './media/background.jpg';

const App: React.FC = () => {
  const theme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ color: '#F4FBFE', font: 'Consolas, Monaco, monospace' }}>
        <Header />
        <Box
          component="main"
          sx={{
            background: `url(${BackGroundImage}) repeat`,
          }}
        >
          <Toolbar />
          <ParallaxProvider>
            <Top />
            <Profile />
            <Career />
            <Skill />
          </ParallaxProvider>
        </Box>
      </Box>
    </ThemeProvider>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
};

export default App;
