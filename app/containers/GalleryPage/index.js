import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    paddingTop: '2em',
  },
  card: {
    fontWeight: 100,
    textAlign: 'center',
  },
};

const GalleryPage = ({ classes }) => (
  <Container className={classes.container}>
    <Paper>
      <Typography variant="h1" className={classes.card}>
        Car Photos
      </Typography>
    </Paper>
  </Container>
);

GalleryPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(GalleryPage);
