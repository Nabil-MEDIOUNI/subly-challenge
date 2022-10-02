import { Box, CircularProgress } from '@material-ui/core';

export default function CircularLoader() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
