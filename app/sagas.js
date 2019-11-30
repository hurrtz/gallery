import { all } from 'redux-saga/effects';

import gallerySagas from 'containers/GalleryPage/sagas';

/* istanbul ignore next */
export default function* rootSaga() {
  yield all([gallerySagas()]);
}
