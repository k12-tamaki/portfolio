import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

const IoT: React.FC = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Box>
            <img src="/static/website_normal.png" />
          </Box>
        </Grid>
        <Grid xs={4}>
          <Typography>IoT</Typography>
          <Typography>
            業者向けにWebシステムの構築を実施していました。
          </Typography>
          <Typography>
            打ち合わせ・環境構築・開発・インフラ(AWS)・稼働後フォローと幅広く実施しています。
          </Typography>
          <Typography>
            HTML/CSS, JavaScript, Git, Vue, Nuxt.js, Python(Flask), PHP, Smarty,
            ORM(FastAPI, Peewee, fuelPHP), AWS(EC2, RDS, S3, Route53), Docker,
            PostgreSQL, MySQL, SQLServer and more...
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default IoT;
