import Image from 'next/image';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import { getPopularMovies } from '@/api/get-popular-movies';

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
              <Card
                sx={{
                  width: 250,
                  border: '1px solid #eaeaea',
                  borderRadius: '16px',
                  boxShadow: 'none',
                  ':hover': { boxShadow: '0px 0px 10px 10px rgba(0,0,0,0.15)' },
                }}
              >
                <Image
                  width="250"
                  height="375"
                  src={`https://image.tmdb.org/t/p/w780${i.poster_path}`}
                  placeholder="blur"
                  quality={100}
                  blurDataURL={`https://image.tmdb.org/t/p/w92${i.poster_path}`}
                  alt="Movie poster"
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {i.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </main>
  );
}
