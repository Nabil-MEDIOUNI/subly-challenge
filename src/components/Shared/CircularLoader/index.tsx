import { CircularProgress } from '@material-ui/core';

import { LoaderContainer } from './styles';

export default function CircularLoader() {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
}
