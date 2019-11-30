import { put, select, takeLatest } from 'redux-saga/effects';

import { FETCH_CAR, FETCH_CAR_URL } from './constants';
import { setCar } from './actions';
import { makeSelectCar } from './selectors';

export function* fetchCar() {
  const car = yield select(makeSelectCar());

  if (car) {
    try {
      // map the response to something the reducer can work with
      const fetchedCar = yield fetch(FETCH_CAR_URL)
        .then(response => response.json())
        .then(response => ({
          id: response.id,
          title: response.title,
          imageURLs: [...new Set(response.images.map(image => image.uri))],
        }));

      if (fetchedCar) {
        yield put(setCar(fetchedCar));
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default function* gallerySagas() {
  yield takeLatest(FETCH_CAR, fetchCar);
}
