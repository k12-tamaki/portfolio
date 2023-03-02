import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';

const IoT: React.FC = () => {
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
            sx={{ padding: '20px', marginTop: '50px' }}
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
