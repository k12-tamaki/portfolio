import React from 'react';

import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import SkillRating from './components/SkillRating';

// import Grid from '@mui/material/Unstable_Grid2';
// import Avatar from '@mui/material/Avatar';

import './css/common.css';

const labels: { [index: string]: string } = {
  1: '知識あり',
  2: '趣味で経験あり',
  3: '業務で経験あり',
  4: '0から作れる',
  5: '人に教えられる',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

type SkillsType = {
  title: string;
  rates: {
    name: string;
    skill: number;
  }[];
};

const Skills: SkillsType = {
  title: 'DevOps',
  rates: [
    {
      name: 'AWS',
      skill: 5,
    },
    {
      name: 'AWS2',
      skill: 4,
    },
    {
      name: 'AWS2',
      skill: 4,
    },
    {
      name: 'AWS2',
      skill: 4,
    },
    {
      name: 'AWS2',
      skill: 4,
    },
    {
      name: 'AWS2',
      skill: 4,
    },
  ],
};

function Skill() {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box className="mainContent">
      <Box className="title">Skill</Box>
      <Box className="content">
        <Box className="profile">
          <Box>
            <Box>今まで仕事や趣味で学んだスキルをまとめました。</Box>
            <Box>
              フルスタックで業務を行っていたため広く浅くになってしまいますがスキルアップに努めてきました。
            </Box>
            <Box>インフラから運用まで業務に携われることが強みになります。</Box>
          </Box>
          <Rating
            // name="hover-feedback"
            value={value}
            // precision={1}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
          <SkillRating item={Skills} />
          <SkillRating item={Skills} />
          <SkillRating item={Skills} />
          {/* <Box sx={{ fontSize: '200%' }}>DevOps</Box>
          <Typography component="legend">AWS</Typography>
          <Rating name="read-only" value={5} readOnly /> */}
          {/* <Box sx={{ fontSize: '200%' }}>FrontEnd</Box> */}
          {/* <Box sx={{ fontSize: '200%' }}>BackEnd</Box> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Skill;
