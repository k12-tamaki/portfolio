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
              <CareerCard
                imagePath="/static/website_normal.png"
                cardTitle="Webシステム"
              />
            </Grid>
            <Grid xs={4}>
              <CareerCard
                imagePath="/static/website_normal.png"
                cardTitle="IoTシステム"
              />
            </Grid>
            <Grid xs={4}>
              <CareerCard
                imagePath="/static/website_normal.png"
                cardTitle="ロボット"
              />
            </Grid>
          </Grid>
          <Box sx={{ fontSize: '200%', marginTop: '50px' }}>Hobby</Box>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <CareerCard
                imagePath="/static/website_normal.png"
                cardTitle="ポートフォリオ"
              />
            </Grid>
            <Grid xs={4}>
              <CareerCard
                imagePath="/static/website_normal.png"
                cardTitle="結婚式HP"
              />
            </Grid>
            <Grid xs={4}></Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Career;
