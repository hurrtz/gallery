import reducer, { initialState } from '../reducers';
import { SET_CAR } from '../constants';

describe('<GalleryPage> Reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_CAR', () => {
    expect(
      reducer([], {
        type: SET_CAR,
        payload: 'TestCar',
      }),
    ).toEqual({ ...initialState, car: 'TestCar' });
  });
});
