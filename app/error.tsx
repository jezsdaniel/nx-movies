'use client';

import { useEffect } from 'react';
import { Button, Stack, Typography } from '@mui/material';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Stack
      minHeight="100vh"
      minWidth="100hw"
      display="flex"
      alignItems="center"
      justifyContent="center"
      direction="column"
      spacing={4}
    >
      <Typography variant="h3">Something went wrong!</Typography>
      <Button onClick={() => reset()}>Try again</Button>
    </Stack>
  );
}
