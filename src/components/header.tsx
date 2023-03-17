import React from 'react';

// mui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// scroll
import { Link as Scroll } from 'react-scroll';

// Emotion
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

// CSS
const BackGroundCss = css({
  backgroundColor: `rgba(244,251,254,0.3)`,
});

// header item
const navItems = ['Top', 'Profile', 'Career', 'Skill'];

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component="nav" css={BackGroundCss}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          ></Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'white', fontWeight: 'bold' }}>
                <Scroll to={item} smooth={true} offset={-60}>
                  {item}
                </Scroll>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
