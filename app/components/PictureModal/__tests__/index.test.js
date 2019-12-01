import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { render, fireEvent } from 'react-testing-library';

import PictureModal from '../index';

const renderer = new ShallowRenderer();
const defaultProps = { isModalVisible: false, title: 'Car', imageURL: 'url' };

describe('<PictureModal />', () => {
  it('should render and match the snapshot', () => {
    renderer.render(<PictureModal {...defaultProps} />);

    const renderedOutput = renderer.getRenderOutput();

    expect(renderedOutput).toMatchSnapshot();
  });

  it('should render an opened modal and match the snapshot', () => {
    const props = { ...defaultProps, isModalVisible: true };

    renderer.render(<PictureModal {...props} />);

    const renderedOutput = renderer.getRenderOutput();

    expect(renderedOutput).toMatchSnapshot();
  });

  it('should close the modal on click on the close button', () => {
    const onOpenModal = jest.fn();
    const props = { ...defaultProps, isModalVisible: true, onOpenModal };
    const { getAllByTestId } = render(<PictureModal {...props} />);

    fireEvent.click(getAllByTestId('button')[0]);

    expect(onOpenModal).toHaveBeenCalledTimes(1);
  });
});
