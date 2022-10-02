import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from './components/Header';
import Filters from './components/Filters/index';
import CardsList from './components/CardsList/index';

import { getData } from './redux/actions/data';

import { PageContainer } from './utils/styles';

function App() {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  return (
    <PageContainer>
      <Header />
      <Filters />
      <CardsList />
    </PageContainer>
  );
}

export default App;
