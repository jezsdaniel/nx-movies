import { Movie } from '@/models/movie';

export const getPopularMovies = async (): Promise<Movie[]> => {
  const res = await fetch(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.THEMOVIEDB_API_KEY}`,
      },
      next: { revalidate: 300 },
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const resData = await res.json();

  return resData.results;
};
