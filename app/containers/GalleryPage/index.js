import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

import PictureGallery from 'components/PictureGallery';

import { makeSelectCarTitle, makeSelectCarImageURLs } from './selectors';
import { fetchCar } from './actions';
import { CAR_IMAGE_FILE_EXTENSION } from './constants';

const styles = {
  section: {
    paddingTop: '2em',
  },
  pictureGalleryWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  divider: {
    marginTop: '2em',
  },
  card: {
    fontWeight: 100,
    textAlign: 'center',
  },
};

const GalleryPage = ({ classes, onFetchCar, title, images }) => {
  useEffect(() => {
    onFetchCar();
  }, []);

  console.log(title, images);

  return (
    <Container className={classes.section}>
      <Typography variant="h2" className={classes.card}>
        {title || <span>&mdash;</span>}
      </Typography>
      <Typography variant="h3" className={classes.card}>
        Picture Gallery
      </Typography>
      <Divider className={classes.divider} />
      <Container
        className={classnames(classes.pictureGalleryWrapper, classes.section)}
      >
        <PictureGallery
          imageURLs={images.map(
            url => `https://${url}_2.${CAR_IMAGE_FILE_EXTENSION}`,
          )}
        />
      </Container>
    </Container>
  );
};

GalleryPage.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  onFetchCar: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  title: makeSelectCarTitle(),
  images: makeSelectCarImageURLs(),
});

const mapDispatchToProps = dispatch => ({
  onFetchCar: () => dispatch(fetchCar()),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStyles(styles),
  memo,
)(GalleryPage);
