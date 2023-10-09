import { Box, CircularProgress } from '@mui/material';

export default function Loading() {
  return (
    <Box
      minHeight="100vh"
      minWidth="100hw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Box>
  );
}
