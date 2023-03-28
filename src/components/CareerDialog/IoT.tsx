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

const IoT: React.FC<{ imagePath: string }> = ({ imagePath }) => {
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
            IoTシステムの構築
          </Typography>
          <Divider />
          <Typography>
            製菓を作成している工場にIoTシステムを導入しました。
          </Typography>
          <Typography>
            配電盤とRaspberryPi(RevPi)を接続して温湿度・電圧・電流などのデータをリアルタイムで取得し、AWSにデータを
            アップロードし、highchartsを利用してグラフ化してWeb
            ブラウザで参照できる仕組みを開発しました。
          </Typography>
          <Typography>
            またMailgunを利用してユーザーに異常を知らせる機能をも作成しました。
          </Typography>
          <Typography>
            インバーターにRaspberryPi(RevPi)を接続して速度の変更なども実施しています。
          </Typography>
          <Typography
            align="center"
            variant="h4"
            css={[PaddingCss, MarginTopCss]}
          >
            使用スキル
          </Typography>
          <Divider />
          <Typography>
            AWS(EC2, RDS, S3), Python, RaspberryPi(RevPi),
          </Typography>
          <Typography>WebSocket, Vue, highcharts and more...</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default IoT;
