import Image from 'next/image';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export default function Home() {
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
            <Grid2 key={i}>
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
                  src="https://image.tmdb.org/t/p/w780/voHUmluYmKyleFkTu3lOXQG702u.jpg"
                  placeholder="blur"
                  quality={100}
                  blurDataURL="https://image.tmdb.org/t/p/w92/voHUmluYmKyleFkTu3lOXQG702u.jpg"
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
                    Loki
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
