import React, { useState, useEffect, memo, Fragment } from 'react';
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
import PictureModal from 'components/PictureModal';

import { makeSelectCarTitle, makeSelectCarImageURLs } from './selectors';
import { fetchCar } from './actions';

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
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    height: '100vh',
    width: '100vw',
  },
};

const GalleryPage = ({ classes, onFetchCar, title, images }) => {
  useEffect(() => {
    onFetchCar();
  }, []);

  const [isModalOpen, setIsOpenModal] = useState(false);
  const [currentImageURL, setCurrentImageURL] = useState('');

  return (
    <Fragment>
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
            title={title}
            imageURLs={images}
            setImageURL={setCurrentImageURL}
            onShowFullSize={setIsOpenModal}
          />
        </Container>
      </Container>

      <PictureModal
        isModalVisible={isModalOpen}
        onOpenModal={setIsOpenModal}
        title={title}
        imageURL={currentImageURL}
      />
    </Fragment>
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
