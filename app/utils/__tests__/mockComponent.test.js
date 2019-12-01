import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import MockComponent from './mockComponent';

const renderer = new ShallowRenderer();

describe('<MockComponent />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<MockComponent />);

    const renderedOutput = renderer.getRenderOutput();

    expect(renderedOutput).toMatchSnapshot();
  });
});
