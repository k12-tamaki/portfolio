import React from 'react';

// Mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';

// Emotion
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// CSS
const BoxCss = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const PaddingCss = css({
  padding: '20px',
});

const MarginTopCss = css({
  marginTop: '50px',
});

const Portfolio: React.FC<{ imagePath: string }> = ({ imagePath }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={7}>
          <Box css={BoxCss}>
            <img style={{ maxWidth: '100%' }} src={imagePath} />
          </Box>
        </Grid>
        <Grid xs={5}>
          <Typography align="center" variant="h4" css={PaddingCss}>
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
            css={[PaddingCss, MarginTopCss]}
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
