import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import loadable from '../loadable';

const renderer = new ShallowRenderer();
const content = () => import('./mockComponent');

describe('<Loadable />', () => {
  it('should render and match the snapshot', () => {
    const Loadable = loadable(content);

    renderer.render(<Loadable />);

    const renderedOutput = renderer.getRenderOutput();

    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render without a given fallback component and match the snapshot', () => {
    const Loadable = loadable(content, {
      fallback: false,
    });

    renderer.render(<Loadable />);

    const renderedOutput = renderer.getRenderOutput();

    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render with a given fallback component and match the snapshot', () => {
    const Loadable = loadable(content, {
      fallback: <div>fallback</div>,
    });

    renderer.render(<Loadable />);

    const renderedOutput = renderer.getRenderOutput();

    expect(renderedOutput).toMatchSnapshot();
  });
});
