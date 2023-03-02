import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import CareerCard from './components/CareerCard';

import './css/common.css';

function Career() {
  type cardObj = {
    component: string;
    imagePath: string;
    cardTitle: string;
  };

  const workArrayObject: cardObj[] = [
    {
      component: 'Web',
      imagePath: '/static/web_s.jpg',
      cardTitle: 'Web',
    },
    {
      component: 'IoT',
      imagePath: '/static/website_normal.png',
      cardTitle: 'IoT',
    },
    {
      component: 'Robot',
      imagePath: '/static/website_normal.png',
      cardTitle: 'Robot',
    },
  ];

  const hobbyArrayObject: cardObj[] = [
    {
      component: 'Portfolio',
      imagePath: '/static/website_normal.png',
      cardTitle: 'Portfolio',
    },
    {
      component: 'Wedding',
      imagePath: '/static/website_normal.png',
      cardTitle: 'Wedding HP',
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
                  component={workObject.component}
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
                  component={hobbyObject.component}
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
