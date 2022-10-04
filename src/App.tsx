import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from './components/Shared/Header';
import Filters from './components/Filters/index';
import CardsList from './components/CardsList/index';

import { getData } from './redux/actions/data';

import { Container } from './utils/styles';

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Filters />
      <CardsList />
    </Container>
  );
}

export default App;
