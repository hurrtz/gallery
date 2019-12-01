import { FETCH_CAR, SET_CAR } from '../constants';
import { fetchCar, setCar } from '../actions';

describe('<GalleryPage> Actions', () => {
  describe('fetchCar', () => {
    it('should return the expected action object', () => {
      const expectedAction = { type: FETCH_CAR };

      expect(fetchCar()).toEqual(expectedAction);
    });
  });

  describe('setCar', () => {
    it('should return the expected action object', () => {
      const expectedAction = { type: SET_CAR, payload: 'test' };

      expect(setCar(expectedAction.payload)).toEqual(expectedAction);
    });
  });
});
