import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import SingleCard from '..';
import CoverImage from '../CoverImage';

import store from '../../../redux/store';
import Status from '../Status';

describe('Single Card', () => {
  it('should render single card', () => {
    const media = {
      cover:
        'https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/3.png',
      createdAt: '2021-07-03T22:11:00.000Z',
      errorMessage: 'Failed while transcribing',
      id: 3,
      languages: ['en'],
      name: 'This has an error',
      status: 'error',
      updatedAt: '2021-07-03T22:11:00.000Z',
    };

    render(
      <Provider store={store}>
        <SingleCard media={media} />
      </Provider>,
    );
    const divElement = screen.getByText(/This has an error/i);
    expect(divElement).toBeInTheDocument();
  });

  it('should render cover image of single card', () => {
    const media = {
      cover:
        'https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/3.png',
      createdAt: '2021-07-03T22:11:00.000Z',
      errorMessage: 'Failed while transcribing',
      id: 3,
      languages: ['en'],
      name: 'This has an error',
      status: 'error',
      updatedAt: '2021-07-03T22:11:00.000Z',
    };

    render(
      <Provider store={store}>
        <CoverImage media={media} />
      </Provider>,
    );
    const coverImage = screen.getByTestId('cover-image');
    expect(coverImage).toBeInTheDocument();
  });

  it('should render status ready', () => {
    const media = {
      cover:
        'https://raw.githubusercontent.com/getsubly/subly-frontend-test/master/public/media/3.png',
      createdAt: '2021-07-03T22:11:00.000Z',
      errorMessage: 'Failed while transcribing',
      id: 3,
      languages: ['en'],
      name: 'This has an error',
      status: 'ready',
      updatedAt: '2021-07-03T22:11:00.000Z',
    };

    render(
      <Provider store={store}>
        <Status status={media.status} updatedAt={media.updatedAt} />
      </Provider>,
    );

    const status = screen.getByText(/Edited 1 year ago/i);
    expect(status).toBeInTheDocument();
  });
});
