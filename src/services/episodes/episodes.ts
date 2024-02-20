import axios from 'axios';

export interface EpisodeResponse {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export const getEpisodes = async (): Promise<EpisodeResponse[]> => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9');
  return data;
};
