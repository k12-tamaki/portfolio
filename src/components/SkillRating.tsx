import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
// import StarIcon from '@mui/icons-material/Star';

import Grid from '@mui/material/Unstable_Grid2';
// import Avatar from '@mui/material/Avatar';

// import './css/common.css';

type Props = {
  item: {
    title: string;
    rates: {
      name: string;
      skill: number;
    }[];
  };
};

const SkillRating: React.FC<Props> = (props: Props) => {
  const { title, rates } = props.item;
  return (
    <>
      <Box sx={{ fontSize: '200%' }}>{title}</Box>
      <Grid container spacing={2}>
        {rates.map((rate, Indx) => (
          <Grid xs={2} key={Indx}>
            <Typography component="legend">{rate.name}</Typography>
            <Rating name="read-only" value={rate.skill} readOnly />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SkillRating;
