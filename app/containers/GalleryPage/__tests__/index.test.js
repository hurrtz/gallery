import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import { render } from 'react-testing-library';

import GalleryPage from '../index';
import configureStore from '../../../configureStore';

const initialState = {};
const store = configureStore(initialState, history);

describe('<GalleryPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <GalleryPage />
        </ConnectedRouter>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
