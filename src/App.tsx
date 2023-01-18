import React from 'react';
// import logo from './media/logo.svg';
// import './css/App.css';
// import background from './media/light.jpg';
import Image from './media/light.jpg'; // Import using relative path

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Top from './Top'
import Profile from './Profile'
import Header from "./components/header";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`
    }
};

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Header />
        <Box component="main" style={styles.paperContainer}>
          <Toolbar />
          <Top />
          <Profile />
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
}

export default App;
