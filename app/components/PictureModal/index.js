import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    height: '100vh',
    width: '100vw',
  },
  headline: {
    backgroundColor: '#FFF',
    borderBottom: '1px solid #000',
    padding: '0.25em 0.5em',
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    display: 'inline-block',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  iconClose: {
    height: '60px',
    width: '60px',
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
  },
  imageWrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    backgroundColor: '#FFF',
  },
}));

const PictureModal = ({ isModalVisible, onOpenModal, title, imageURL }) => {
  const classes = useStyles();

  const handleClose = () => {
    onOpenModal(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isModalVisible}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
        className: classes.backdrop,
      }}
    >
      <Fade in={isModalVisible}>
        <div className={classes.modalContent}>
          <Typography variant="h2" className={classes.headline}>
            <span className={classes.title}>{title}</span>
            <IconButton
              aria-label="close modal"
              onClick={handleClose}
              className={classes.iconClose}
            >
              <CloseIcon />
            </IconButton>
          </Typography>
          <div className={classes.imageWrapper}>
            <img src={imageURL} alt="testee" className={classes.image} />
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

PictureModal.propTypes = {
  isModalVisible: PropTypes.bool,
  onOpenModal: PropTypes.func,
  title: PropTypes.string,
  imageURL: PropTypes.string,
};

export default PictureModal;
