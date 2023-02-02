import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import CareerCard from './components/CareerCard';

import './css/common.css';

function Career() {
  interface cardObj {
    imagePath: string;
    cardTitle: string;
  }

  const workArrayObject: cardObj[] = [
    {
      imagePath: '/static/website_normal.png',
      cardTitle: 'Webシステム',
    },
    {
      imagePath: '/static/website_normal.png',
      cardTitle: 'IoTシステム',
    },
    {
      imagePath: '/static/website_normal.png',
      cardTitle: 'ロボット',
    },
  ];

  const hobbyArrayObject = [
    {
      imagePath: '/static/website_normal.png',
      cardTitle: 'ポートフォリオ',
    },
    {
      imagePath: '/static/website_normal.png',
      cardTitle: '結婚式HP',
    },
  ];

  return (
    <Box className="mainContent">
      <Box className="title">Career</Box>
      <Box className="content">
        <Box className="profile">
          <Box sx={{ fontSize: '200%' }}>Work</Box>
          <Grid container spacing={2}>
            {workArrayObject.map((workObject, workIndex) => (
              <Grid xs={4} key={workIndex}>
                <CareerCard
                  imagePath={workObject.imagePath}
                  cardTitle={workObject.cardTitle}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ fontSize: '200%', marginTop: '50px' }}>Hobby</Box>
          <Grid container spacing={2}>
            {hobbyArrayObject.map((hobbyObject, hobbyIndex) => (
              <Grid xs={4} key={hobbyIndex}>
                <CareerCard
                  imagePath={hobbyObject.imagePath}
                  cardTitle={hobbyObject.cardTitle}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default Career;
