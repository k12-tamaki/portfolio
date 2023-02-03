import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';

import ProfileMessage from './components/ProfileMessage';

import './css/common.css';
import './css/Profile.css';

const Profile: React.FC = () => {
  return (
    <Box className="mainContent">
      <Box className="title">Profile</Box>
      <Box className="content">
        <Box className="profile">
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
                src="/static/avatar.jpg"
                sx={{ width: 100, height: 100 }}
              />
            </Grid>
            <Grid xs={9}>
              <Grid xs={12}>
                <Box>Twitter: ***</Box>
              </Grid>
              <Grid xs={12} mdOffset="auto">
                <Box>Instagram: ***</Box>
              </Grid>
              <Grid xs={12} mdOffset="auto">
                <Box>Github: ***</Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
