import { takeLatest } from 'redux-saga/effects';

import gallery, { fetchCar } from '../sagas';
import { FETCH_CAR } from '../constants';

describe('<GalleryPage> Saga', () => {
  const gallerySaga = gallery();

  it('should start task to watch for FETCH_CAR action', () => {
    const takeLatestDescriptor = gallerySaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(FETCH_CAR, fetchCar));
  });
});
