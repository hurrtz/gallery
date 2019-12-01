import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { CAR_IMAGE_FILE_EXTENSION } from 'containers/GalleryPage/constants';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    marginBottom: '2em',
    flex: '0 0 auto',
    [theme.breakpoints.down('sm')]: {
      flex: '1 0 auto',
    },
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
  const isMobile = useMediaQuery('(max-width: 600px)');

  const createMobileContent = url => (
    <Card
      key={url}
      className={classes.card}
      onClick={() => handleShowFullImage(url)}
      data-testid="card"
    >
      <CardMedia image={generateURL(url, true)} component="img" title={title} />
    </Card>
  );

  const createDesktopContent = url => (
    <Card key={url} className={classes.card}>
      <CardMedia image={generateURL(url, true)} component="img" title={title} />

      <CardActions>
        <IconButton
          aria-label="show image"
          onClick={() => handleShowFullImage(url)}
          data-testid="button"
        >
          <ZoomInIcon />
        </IconButton>
      </CardActions>
    </Card>
  );

  if (isMobile) {
    return imageURLs.map(url => createMobileContent(url));
  }

  return imageURLs.map(url => createDesktopContent(url));
};

PictureGallery.propTypes = {
  title: PropTypes.string.isRequired,
  imageURLs: PropTypes.arrayOf(PropTypes.string),
  onShowFullSize: PropTypes.func,
  setImageURL: PropTypes.func,
};

export default PictureGallery;
