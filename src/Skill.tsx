import React from 'react';

// Mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

// Component
import SkillRating from './components/SkillRating';

// Emotion
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// CSS
const BoxCss = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '30px',
});

const StarIconCss = css({ opacity: 0.55 });

const labels: { [index: string]: string } = {
  1: '概念は知ってる',
  2: '趣味で経験あり',
  3: '業務で経験あり',
  4: '長期間経験あり',
  5: '人に教えられる',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

// Type
type SkillsType = {
  title: string;
  rates: {
    name: string;
    skill: number;
    comment?: string;
  }[];
}[];

// SkillData
const SkillList: SkillsType = [
  {
    title: '開発環境/インフラ',
    rates: [
      {
        name: 'Git',
        skill: 5,
      },
      {
        name: 'Docker',
        skill: 5,
      },
      {
        name: 'VSCode',
        skill: 4,
      },
      {
        name: 'Mac',
        skill: 4,
        comment: 'yarn, npmを利用して環境構築',
      },
      {
        name: 'AWS',
        skill: 4,
        comment:
          '[2020年SAA取得] EC2, RDS, S3, Route53, Lambda, DynamoDB etc...',
      },
      {
        name: 'RaspberryPi',
        skill: 3,
      },
    ],
  },
  {
    title: 'フロントエンド',
    rates: [
      {
        name: 'HTML/CSS',
        skill: 5,
      },
      {
        name: 'JavaScript',
        skill: 5,
      },
      {
        name: 'Vue/Nuxt.js',
        skill: 5,
      },
      {
        name: 'TypeScript',
        skill: 2,
      },
      {
        name: 'React/Next.js',
        skill: 2,
      },
    ],
  },
  {
    title: 'バックエンド/DB',
    rates: [
      {
        name: 'PHP',
        skill: 5,
        comment: 'FuelPHP, Smarty',
      },
      {
        name: 'Python',
        skill: 4,
        comment: 'Flask, FastAPI, Peewee',
      },
      {
        name: 'VB.NET',
        skill: 3,
      },
      {
        name: 'Node.js',
        skill: 1,
      },
      {
        name: 'PostgreSQL',
        skill: 4,
      },
      {
        name: 'SQLServer',
        skill: 3,
      },
      {
        name: 'MySQL',
        skill: 3,
      },
    ],
  },
];

function Skill() {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box className="mainContent" id="Skill">
      <Box className="title">Skill</Box>
      <Box className="content">
        <Box className="content-box">
          <Box>
            <Box>今まで仕事や趣味で学んだスキルをまとめました。</Box>
            <Box>
              フルスタックで業務を行っていたため広く浅くになってしまいますがスキルアップに努めてきました。
            </Box>
            <Box>インフラから運用まで業務に携われることが強みになります。</Box>
          </Box>
          <Box css={BoxCss}>
            <Rating
              value={value}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={<StarIcon css={StarIconCss} fontSize="inherit" />}
              size="large"
            />
            {value !== null && (
              <Typography sx={{ ml: 2 }}>
                {labels[hover !== -1 ? hover : value]}
              </Typography>
            )}
          </Box>
          {SkillList.map((skill, index) => (
            <SkillRating key={index} item={skill} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Skill;
