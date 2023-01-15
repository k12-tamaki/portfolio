import React from 'react';
// import logo from './media/logo.svg';
// import './css/App.css';
import Top from './Top'

// import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Button from "@mui/material/Button";
import Header from "./components/header";
// import { Box, Stack } from "@mui/material";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          flexWrap: "nowrap",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary">
            メインカラー(contained)
          </Button>
          <Button variant="outlined" color="secondary">
            セカンダリーカラー(outlined)
          </Button>
          <Button variant="text" color="success">
            サクセスカラー(text)
          </Button>
        </Stack>
      </Box> */}
      <Top />
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
