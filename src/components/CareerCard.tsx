import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// import Button from '@mui/material/Button';
// import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import Typography from '@mui/material/Typography';

import WebSystem from './CareerDialog/WebSystem';
import IoT from './CareerDialog/IoT';
import Robot from './CareerDialog/Robot';
import Portfolio from './CareerDialog/Portfolio';
import Wedding from './CareerDialog/Wedding';

const BootstrapDialogTitle: React.FC<{
  children?: React.ReactNode;
  onClose: () => void;
}> = ({ children, onClose }) => {
  return (
    <DialogTitle sx={{ m: 0, p: 2 }}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

const CareerCard: React.FC<{
  component: string;
  imagePath: string;
  cardTitle: string;
}> = ({ component, imagePath, cardTitle }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const isWebSystem = component == 'Web';
  // const isWebSystem = component == 'Web';

  return (
    <Box>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleClickOpen}>
          <CardMedia
            component="img"
            height="140"
            image={imagePath}
            alt={cardTitle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardTitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth={false}
        fullWidth={true}
      >
        <BootstrapDialogTitle onClose={handleClose}>
          {cardTitle}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {component == 'Web' && <WebSystem />}
          {component == 'IoT' && <IoT />}
          {component == 'Robot' && <Robot />}
          {component == 'Portfolio' && <Portfolio />}
          {component == 'Wedding' && <Wedding />}
        </DialogContent>
        {/* <DialogContent dividers>{isWebSystem && <WebSystem />}</DialogContent> */}
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </Dialog>
    </Box>
  );
};

export default CareerCard;
