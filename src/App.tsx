import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@material-ui/core';

import CircularLoader from './components/Shared/CircularLoader';

import { getData } from './redux/actions/data';
import { RootStateType } from './redux/reducer';

import { ErrorMessage } from './utils/styles';

function App() {
  const dispatch: any = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootStateType) => state.dataReducer,
  );

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if (loading) {
    return <CircularLoader />;
  }

  if (error) {
    return <ErrorMessage>Error Occured!</ErrorMessage>;
  }

  return <Box>{JSON.stringify(data)}</Box>;
}

export default App;
