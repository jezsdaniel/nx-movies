import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconButton, Stack, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import { getMovieDetails } from '@/api/get-movie-details';

const MoviePage = async ({ params: { id } }: { params: { id: string } }) => {
  const movie = await getMovieDetails(id);

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
        <Link
          href="/"
          style={{
            alignSelf: 'start',
          }}
        >
          <IconButton>
            <ArrowBack />
          </IconButton>
        </Link>
        <Image
          width="360"
          height="540"
          src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
          placeholder="blur"
          blurDataURL={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
          alt="Movie poster"
          style={{
            borderRadius: '24px',
          }}
        />
        <Typography variant="h3">{movie.title}</Typography>
        <Typography variant="subtitle2">{movie.release_date}</Typography>
        <Typography variant="body1">{movie.overview}</Typography>
      </Stack>
    </main>
  );
};

export default MoviePage;
