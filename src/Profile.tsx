import React from 'react';

// Mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
// import { Typography } from '@mui/material';

// Component
import ProfileMessage from './components/ProfileMessage';

// Media
import AvatarImage from 'media/avatar.jpg';

// Emotion
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

// CSS
const BoxCss = css({
  width: '80%',
  height: '80%',
  minHeight: '80%',
  padding: '50px',
  background: 'rgba(255, 255, 255, 0.3)',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(2px)',
  WebkitBackdropFilter: 'blur(2px)',
  borderEadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
});

const Profile: React.FC = () => {
  return (
    <Box className="mainContent" id="Profile">
      <Box className="title">Profile</Box>
      <Box className="content">
        <Box css={BoxCss}>
          <Grid container spacing={2}>
            <Grid xs={10} mdOffset="auto">
              <ProfileMessage
                message1="新潟在住でWeb開発業界で「フルスタックエンジニア」をやっています。"
                message2="高校、大学とJava, C言語などでプログラミングを学び"
                message3="IT企業に入社して早10年となります。"
              />
            </Grid>
            <Grid xs={10} mdOffset="auto">
              <ProfileMessage
                message1="AWSにてインフラの構築からフロント・バックエンドの開発を行い、"
                message2="Dockerなどで開発環境の構築なども経験しています。"
                message3="また顧客折衝・設計なども多く経験しており多岐にわたってITに携わっています。"
              />
            </Grid>
            <Grid xs={10} mdOffset="auto">
              <ProfileMessage
                message1="このポートフォリオでは私が今まで手がけたシステムの概要や"
                message2="スキルについてまとめています。"
                message3="興味がありましたら気軽にご連絡ください！"
              />
            </Grid>
            <Grid xs={10} mdOffset="auto"></Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={1} mdOffset="auto">
              <Avatar
                alt="Tama"
                src={AvatarImage}
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid xs={9}>
              <Grid xs={4}>
                <TwitterIcon fontSize="large" />
                <a
                  href="https://twitter.com/tama_nattsu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tama_nattsu
                </a>
              </Grid>
              <Grid xs={4}>
                <InstagramIcon fontSize="large" />
                <a
                  href="https://www.instagram.com/tama_katsu13/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tama_katsu13
                </a>
              </Grid>
              <Grid xs={4}>
                <GitHubIcon fontSize="large" />
                <a
                  href="https://github.com/k12-tamaki/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  k12-tamaki
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
