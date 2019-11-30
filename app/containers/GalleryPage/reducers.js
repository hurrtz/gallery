import { SET_CAR } from './constants';

export const initialState = {
  car: {
    id: undefined,
    title: '',
    imageURLs: [],
  },
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAR:
      return { ...state, car: action.payload };

    default:
      return state;
  }
};

export default galleryReducer;
