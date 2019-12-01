import { browserHistory } from 'react-router-dom';
import configureStore from '../configureStore';

describe('configureStore', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  describe('runSaga', () => {
    it('should contain a hook for `sagaMiddleware.run`', () => {
      expect(typeof store.runSaga).toBe('function');
    });
  });
});

describe('configureStore params', () => {
  it('should initiate with no given params', () => {
    const store = configureStore(undefined, browserHistory);

    expect(Object.keys(store.getState()).length).toBeGreaterThan(0);
  });
});
