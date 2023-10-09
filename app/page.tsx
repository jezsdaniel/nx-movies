import { Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import { getPopularMovies } from '@/api/get-popular-movies';
import { MovieItem } from '@/components/movie-item';

export default async function Home() {
  const popularMovies = await getPopularMovies();

  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        p={4}
        maxWidth="lg"
        sx={{
          width: '100%',
        }}
        spacing={4}
      >
        <Typography variant="h4">Popular Movies</Typography>
        <Grid2
          container
          justifyContent="center"
          alignItems="center"
          spacing={4}
          sx={{
            width: '100%',
          }}
        >
          {popularMovies.map((i) => (
            <Grid2 key={i.id}>
              <MovieItem movie={i} />
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </main>
  );
}
