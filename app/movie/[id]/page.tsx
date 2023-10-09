import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconButton, Stack, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const MoviePage = () => {
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
          src={`https://image.tmdb.org/t/p/w780/NNxYkU70HPurnNCSiCjYAmacwm.jpg`}
          placeholder="blur"
          quality={100}
          blurDataURL={`https://image.tmdb.org/t/p/w92/NNxYkU70HPurnNCSiCjYAmacwm.jpg`}
          alt="Movie poster"
          style={{
            borderRadius: '24px',
          }}
        />
        <Typography variant="h3">Movie title</Typography>
        <Typography variant="subtitle2">2023</Typography>
        <Typography variant="body1">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry`s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s
          with the release of Letraset sheets containing Lorem Ipsum passages, and more
          recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Typography>
      </Stack>
    </main>
  );
};

export default MoviePage;
