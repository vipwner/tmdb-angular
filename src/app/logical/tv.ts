/**
 * Class representation of Tv Show
 */
export class Tv {
  id: number;
  name: string;
  original_name: string;
  original_title: string;
  overview: string;
  vote_average: number;
  first_air_date: string;
  last_air_date:string;
  status:string;
  episode_run_time: number;
  backdrop_path: string;
  poster_path: string;
  homepage: string;
  genres: {
    id: number;
    name: string;
  };
  created_by: {
    id: number,
    name: string,
    profile_path: string
  };
  number_of_episodes: number;
  number_of_seasons: number;
}