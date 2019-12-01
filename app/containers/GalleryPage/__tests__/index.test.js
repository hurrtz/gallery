import React from 'react';
import { render } from 'react-testing-library';

import GalleryPage from '../index';

describe('<GalleryPage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<GalleryPage />);
    expect(firstChild).toMatchSnapshot();
  });
});
