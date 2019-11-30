import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectState = state => state.gallery || initialState;

const makeSelectCar = () =>
  createSelector(
    selectState,
    state => state.car || undefined,
  );

const makeSelectCarTitle = () =>
  createSelector(
    [makeSelectCar()],
    car => (car ? car.title : ''),
  );

const makeSelectCarImageURLs = () =>
  createSelector(
    [makeSelectCar()],
    car => (car ? car.imageURLs : []),
  );

export { makeSelectCar, makeSelectCarTitle, makeSelectCarImageURLs };
