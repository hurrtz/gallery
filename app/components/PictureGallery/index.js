import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    flex: '0 0 auto',
    maxWidth: 345,
    marginBottom: '2em',
  },
}));

const PictureGallery = ({ imageURLs }) => {
  const classes = useStyles();

  return imageURLs.map(url => (
    <Card key={url} className={classes.card}>
      <CardMedia image={url} component="img" title="Paella " />
      <CardActions>
        <IconButton aria-label="show bigger image">
          <ZoomInIcon />
        </IconButton>
      </CardActions>
    </Card>
  ));
};

export default PictureGallery;
