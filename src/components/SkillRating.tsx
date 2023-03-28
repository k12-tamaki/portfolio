import React from 'react';

// Mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Unstable_Grid2';

// Emotion
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// CSS
const BoxCss = css({
  fontSize: '200%',
  marginTop: '50px',
});

// Type
type Props = {
  item: {
    title: string;
    rates: {
      name: string;
      skill: number;
      comment?: string;
    }[];
  };
};

const SkillRating: React.FC<Props> = (props: Props) => {
  const { title, rates } = props.item;
  return (
    <>
      <Box css={BoxCss}>{title}</Box>
      <Grid container spacing={2}>
        {rates.map((rate, Indx) => (
          <Grid xs={2} key={Indx}>
            <Tooltip title={rate.comment} arrow>
              <Box>
                <Typography component="legend">{rate.name}</Typography>
                <Rating name="read-only" value={rate.skill} readOnly />
              </Box>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SkillRating;
