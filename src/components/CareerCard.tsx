import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CareerCard: React.FC<{
  imagePath: String;
  alt: String;
  cardTitle: String;
}> = ({ imagePath, alt, cardTitle }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/website_normal.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardTitle}
            {imagePath}
            {alt}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CareerCard;
