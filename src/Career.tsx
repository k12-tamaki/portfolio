import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import CareerCard from './components/CareerCard';

import './css/common.css';

function Career() {
  return (
    <Box className="mainContent">
      <Box className="title">Career</Box>
      <Box className="content">
        <Box className="profile">
          <Box sx={{ fontSize: '200%' }}>Work</Box>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <CareerCard imagePath="" alt="" cardTitle="Webシステム" />
            </Grid>
            <Grid xs={4}>
              <CareerCard imagePath="" alt="" cardTitle="Webシステム" />
            </Grid>
            <Grid xs={4}>
              <CareerCard imagePath="" alt="" cardTitle="Webシステム" />
            </Grid>
          </Grid>
          <Box sx={{ fontSize: '200%' }}>Hobby</Box>
          <Grid container spacing={2}>
            <Grid xs={4}></Grid>
            <Grid xs={4}></Grid>
            <Grid xs={4}></Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Career;
