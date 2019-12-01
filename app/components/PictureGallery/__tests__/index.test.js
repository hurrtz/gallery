import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import PictureGallery from '../index';

function createMatchMedia(isMobile) {
  return () => ({
    matches: isMobile,
    addListener: () => {},
    removeListener: () => {},
  });
}

const enforceMobile = () => {
  window.matchMedia = createMatchMedia(true);
};

const enforceDesktop = () => {
  window.matchMedia = createMatchMedia(false);
};

const defaultProps = {
  imageURLs: [],
  title: 'Test',
};

const propsWithURLs = {
  ...defaultProps,
  imageURLs: ['imageA', 'imageB', 'imageC'],
};

describe('<PictureGallery />', () => {
  describe('And has mobile view', () => {
    beforeEach(() => {
      enforceMobile();
    });

    it('should render and match the snapshot', () => {
      const tree = renderer
        .create(<PictureGallery {...defaultProps} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render with given urls and match the snapshot', () => {
      const tree = renderer
        .create(<PictureGallery {...propsWithURLs} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should call related callback functions when the card is clicked', () => {
      const setImageURL = jest.fn();
      const onShowFullSize = jest.fn();
      const props = { ...propsWithURLs, setImageURL, onShowFullSize };

      const { getAllByTestId } = render(<PictureGallery {...props} />);

      fireEvent.click(getAllByTestId('card')[0]);

      expect(setImageURL).toHaveBeenCalledTimes(1);
      expect(onShowFullSize).toHaveBeenCalledTimes(1);
    });
  });

  describe('And has desktop view', () => {
    beforeEach(() => {
      enforceDesktop();
    });

    it('should render and match the snapshot', () => {
      const tree = renderer
        .create(<PictureGallery {...defaultProps} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should render with given urls and match the snapshot', () => {
      const tree = renderer
        .create(<PictureGallery {...propsWithURLs} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should call related callback functions when the card is clicked', () => {
      const setImageURL = jest.fn();
      const onShowFullSize = jest.fn();
      const props = { ...propsWithURLs, setImageURL, onShowFullSize };

      const { getAllByTestId } = render(<PictureGallery {...props} />);

      fireEvent.click(getAllByTestId('button')[0]);

      expect(setImageURL).toHaveBeenCalledTimes(1);
      expect(onShowFullSize).toHaveBeenCalledTimes(1);
    });
  });
});
