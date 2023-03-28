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

const Wedding: React.FC<{ imagePath: string }> = ({ imagePath }) => {
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
            Weddingホームページ
          </Typography>
          <Divider />
          <Typography>新郎新婦を紹介するホームページとなります。</Typography>
          <Typography>
            もともとは私の結婚式でホームページを作ったら面白いんじゃないかと思い作成しました。
          </Typography>
          <Typography>
            自己紹介や連絡先、会場までのアクセスを記載して実用性のあるホームページになったかと思います。
          </Typography>
          <Typography>
            実際にAWS(S3,
            Route53)を利用して静的サイトを公開し、QRコードを招待状と一緒に添付して多くの参列者に見ていただき好評いただきました。
          </Typography>
          <Typography>
            その後、スキルマーケットに展開して購入された実績もあります。
          </Typography>
          <Typography
            align="center"
            variant="h4"
            css={[PaddingCss, MarginTopCss]}
          >
            使用スキル
          </Typography>
          <Divider />
          <Typography>Vue, JavaScript, AWS(EC2, Route53), Yarn, Git</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Wedding;
