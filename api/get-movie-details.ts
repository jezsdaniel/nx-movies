import { IMovie } from '@/models/movie';

export const getMovieDetails = async (id: string): Promise<IMovie> => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.THEMOVIEDB_API_KEY}`,
    },
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const resData = await res.json();

  return resData;
};
