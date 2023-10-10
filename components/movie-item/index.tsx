import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, Typography } from '@mui/material';

import { IMovie } from '@/models/movie';

interface MovieItemProps {
  movie: IMovie;
}

export const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <Link
      href={`/movie/${movie.id}`}
      style={{
        textDecoration: 'none',
      }}
    >
      <Card
        sx={{
          width: 250,
          border: '1px solid #eaeaea',
          borderRadius: '16px',
          boxShadow: 'none',
          ':hover': {
            boxShadow: '0px 0px 10px 10px rgba(0,0,0,0.15)',
            cursor: 'pointer',
          },
        }}
      >
        <Image
          width="260"
          height="390"
          src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
          placeholder="blur"
          blurDataURL={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
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
            {movie.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};
