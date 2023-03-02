import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';

const Portfolio: React.FC = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={7}>
          <Box>
            <img src="/static/website_normal.png" />
          </Box>
        </Grid>
        <Grid xs={5}>
          <Typography align="center" variant="h4" sx={{ padding: '20px' }}>
            Portfolio
          </Typography>
          <Divider />
          <Typography>本ホームページとなります。</Typography>
          <Typography>
            React + TypeScriptの学習がしたいと思い作成しました。
          </Typography>
          <Typography>
            まだまだ改善の余地がありますが、暖かく見守ってもらえればと思います。
          </Typography>
          <Typography
            align="center"
            variant="h4"
            sx={{ padding: '20px', marginTop: '50px' }}
          >
            使用スキル
          </Typography>
          <Divider />
          <Typography>React, Mui, Emotion, TypeScript, Yarn, Git</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Portfolio;
