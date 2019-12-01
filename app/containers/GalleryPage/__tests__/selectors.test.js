import { initialState } from '../reducers';
import {
  makeSelectCar,
  makeSelectCarTitle,
  makeSelectCarImageURLs,
} from '../selectors';

describe('<GalleryPage> Selectors', () => {
  describe('makeSelectCar', () => {
    it('should select the root car', () => {
      const { car } = initialState;

      const mockedState = {
        car,
      };

      expect(makeSelectCar()(mockedState)).toEqual(car);
    });

    it('should return the default value when no state is existent', () => {
      const mockedState = { gallery: {} };

      expect(makeSelectCar()(mockedState)).toEqual(undefined);
    });
  });

  describe('makeSelectCarTitle', () => {
    it('should select the title of the car', () => {
      const { car } = initialState;

      const mockedState = {
        car,
      };

      expect(makeSelectCarTitle()(mockedState)).toEqual(car.title);
    });

    it('should return the default value when no state is existent', () => {
      const mockedState = { gallery: {} };

      expect(makeSelectCarTitle()(mockedState)).toEqual('');
    });
  });

  describe('makeSelectCarImageURLs', () => {
    it('should select the image urls of the car', () => {
      const { car } = initialState;

      const mockedState = {
        car,
      };

      expect(makeSelectCarImageURLs()(mockedState)).toEqual(car.imageURLs);
    });

    it('should return the default value when no state is existent', () => {
      const mockedState = { gallery: {} };

      expect(makeSelectCarImageURLs()(mockedState)).toEqual([]);
    });
  });
});
