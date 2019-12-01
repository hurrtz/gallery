import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { makeStyles } from '@material-ui/core/styles';

import { CAR_IMAGE_FILE_EXTENSION } from 'containers/GalleryPage/constants';

const useStyles = makeStyles(() => ({
  card: {
    flex: '0 0 auto',
    maxWidth: 345,
    marginBottom: '2em',
  },
}));

const generateURL = (url, thumbnail) =>
  `https://${url}_${thumbnail ? '2' : '27'}.${CAR_IMAGE_FILE_EXTENSION}`;

const PictureGallery = ({ title, imageURLs, setImageURL, onShowFullSize }) => {
  const classes = useStyles();
  const handleShowFullImage = url => {
    setImageURL(generateURL(url, false));
    onShowFullSize(true);
  };

  return imageURLs.map(url => (
    <Card key={url} className={classes.card}>
      <CardMedia image={generateURL(url, true)} component="img" title={title} />
      <CardActions>
        <IconButton
          aria-label="show bigger image"
          onClick={() => handleShowFullImage(url)}
        >
          <ZoomInIcon />
        </IconButton>
      </CardActions>
    </Card>
  ));
};

PictureGallery.propTypes = {
  title: PropTypes.string.isRequired,
  imageURLs: PropTypes.arrayOf(PropTypes.string),
  onShowFullSize: PropTypes.func,
  setImageURL: PropTypes.func,
};

export default PictureGallery;
