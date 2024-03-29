import React from 'react';

// Mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

// Component
import CareerCard from './components/CareerCard';

// Media
import WebImage from 'media/skill/web.jpg';
import IoTImage from 'media/skill/iot.jpg';
import RobotImage from 'media/skill/robot.jpg';
import PortfolioImage from 'media/skill/portfolio.jpg';
import WeddingImage from 'media/skill/wedding.jpg';

// Emotion
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// CSS
const FontSizeCss = css({
  fontSize: '200%',
});

const MarginTopCss = css({
  marginTop: '50px',
});

function Career() {
  type cardObj = {
    component: string;
    imagePath: string;
    cardTitle: string;
  };

  const workArrayObject: cardObj[] = [
    {
      component: 'Web',
      imagePath: WebImage,
      cardTitle: 'Web',
    },
    {
      component: 'IoT',
      imagePath: IoTImage,
      cardTitle: 'IoT',
    },
    {
      component: 'Robot',
      imagePath: RobotImage,
      cardTitle: 'Robot',
    },
  ];

  const hobbyArrayObject: cardObj[] = [
    {
      component: 'Portfolio',
      imagePath: PortfolioImage,
      cardTitle: 'Portfolio',
    },
    {
      component: 'Wedding',
      imagePath: WeddingImage,
      cardTitle: 'Wedding HP',
    },
  ];

  return (
    <Box className="mainContent" id="Career">
      <Box className="title">Career</Box>
      <Box className="content">
        <Box className="content-box">
          <Box css={FontSizeCss}>Work</Box>
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
          <Box css={[FontSizeCss, MarginTopCss]}>Hobby</Box>
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
