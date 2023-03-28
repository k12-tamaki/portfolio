import React from 'react';

// Mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
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

const WebSystem: React.FC<{ imagePath: string }> = ({ imagePath }) => {
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
            Webシステムの構築
          </Typography>
          <Typography>
            顧客の要望に併せて業者(小売り、製菓、花き、輸出入、宿泊etc...)向けにWebシステムをフルスクラッチで開発・構築していました。
          </Typography>
          <Typography>
            打ち合わせ・環境構築・開発・インフラ(AWS)・稼働後フォローとフルスタックエンジニアとしての経験があります。
          </Typography>
          <Typography
            align="center"
            variant="h4"
            css={[PaddingCss, MarginTopCss]}
          >
            使用スキル
          </Typography>
          <Divider />
          <Typography>Git, Docker, Zoom, Redmine</Typography>
          <Typography>HTML/CSS, JavaScript, JQuery, Vue, Nuxt.js</Typography>
          <Typography>
            PHP(fuelPHP, Smarty), Python(Flask, FastAPI, Peewee)
          </Typography>
          <Typography>
            AWS(EC2, RDS, S3, Route53), PostgreSQL, MySQL, SQLServer and more...
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default WebSystem;
