import { FETCH_CAR, SET_CAR } from './constants';

export const fetchCar = () => ({ type: FETCH_CAR });
export const setCar = car => ({ type: SET_CAR, payload: car });
