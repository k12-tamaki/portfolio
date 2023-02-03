import React from 'react';

import Box from '@mui/material/Box';

const ProfileMessage: React.FC<{
  message1: string;
  message2: string;
  message3: string;
}> = ({ message1, message2, message3 }) => {
  return (
    <Box>
      <Box>{message1}</Box>
      <Box>{message2}</Box>
      <Box>{message3}</Box>
    </Box>
  );
};

export default ProfileMessage;
