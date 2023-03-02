import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';

const Robot: React.FC = () => {
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
            Robot(?)の作成
          </Typography>
          <Divider />
          <Typography>
            指定した製菓を排出するためのロボットを作成しました。
          </Typography>
          <Typography>
            RaspberryPiにタッチパネルを接続して、ブラウザで製菓
            を指定するための画面やそれに付随する全画面の作成を
            主に担当し、排出機構でPythonを利用しているところのプログラミン
            グにも携わっていました。
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
            HTML/CSS, JavaScript, Vue, WebSocket, Python, RaspberryPi
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Robot;
