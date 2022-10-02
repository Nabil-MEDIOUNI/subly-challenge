import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CardsList from './components/CardsList/index';
import Header from './components/Header';

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
      <CardsList />
    </PageContainer>
  );
}

export default App;
