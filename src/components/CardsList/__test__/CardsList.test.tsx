import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import CardsList from '../index';

import store from '../../../redux/store';

describe('Card List', () => {
  it('should render cards list', () => {
    render(
      <Provider store={store}>
        <CardsList />
      </Provider>,
    );
    const coverList = screen.getByTestId('card-list');
    expect(coverList).toBeInTheDocument();
  });
});
