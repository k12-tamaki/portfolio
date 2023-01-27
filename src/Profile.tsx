import React from 'react';

import Box from '@mui/material/Box';
import Grid  from '@mui/material/Unstable_Grid2'
import Avatar from '@mui/material/Avatar';

import './css/common.css';
import './css/Profile.css';

function Profile() {
  return (
    <Box className="mainContent">
      <Box className="title">
        Profile
      </Box>
      <Box className="profile">
        <Box className="profileContent">
          <Grid container spacing={2}>
            <Grid xs={10} mdOffset="auto">
              <Box>
                <Box>新潟在住でWeb開発業界で「フルスタックエンジニア」をやっています。</Box>
                <Box>高校、大学とJava, C言語などでプログラミングを学び</Box>
                <Box>IT企業に入社して早10年となります。</Box>
              </Box>
            </Grid>
            <Grid xs={10} mdOffset="auto">
              <Box>AWSにてインフラの構築からフロント・バックエンドの開発を行い、</Box>
              <Box>Dockerなどで開発環境の構築なども経験しています。</Box>
              <Box>また顧客折衝・設計なども多く経験しており多岐にわたってITに携わっています。</Box>
            </Grid>
            <Grid xs={10} mdOffset="auto">
              <Box>このポートフォリオでは私が今まで手がけたシステムの概要や</Box>
              <Box>スキルについてまとめています。</Box>
              <Box>興味がありましたら気軽にご連絡ください！</Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={1} mdOffset="auto">
              <Avatar
                alt="Tama"
                src="/static/avatar.jpg"
                sx={{ width: 100, height: 100}}
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
}

export default Profile;
