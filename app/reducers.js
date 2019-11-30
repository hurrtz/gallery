import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import galleryReducers from 'containers/GalleryPage/reducers';

export default combineReducers({
  router: connectRouter(history),
  gallery: galleryReducers,
});
