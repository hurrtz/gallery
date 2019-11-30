import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { makeSelectCarTitle, makeSelectCarImageURLs } from './selectors';
import { fetchCar } from './actions';

const styles = {
  container: {
    paddingTop: '2em',
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
    <Container className={classes.container}>
      <Paper>
        <Typography variant="h2" className={classes.card}>
          {title || <span>&mdash;</span>}
        </Typography>
        <Typography variant="h3" className={classes.card}>
          Picture Gallery
        </Typography>
      </Paper>
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
