import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

const WebSystem: React.FC = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <img style={{ maxWidth: '100%' }} src="/static/website_normal.png" />
        </Grid>
        <Grid xs={4}>
          <Typography variant="h6" gutterBottom>
            詳細
          </Typography>
          <Typography gutterBottom>webシステムの説明。。。。。。</Typography>
        </Grid>
      </Grid>
      {/* <Typography gutterBottom>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </Typography>
      <Typography gutterBottom>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </Typography>
      <Typography gutterBottom>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
        ullamcorper nulla non metus auctor fringilla.
      </Typography> */}
    </Box>
  );
};

export default WebSystem;
