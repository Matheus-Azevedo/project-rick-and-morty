import axios from 'axios';

export interface CharacterResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export const getCharacters = async (): Promise<CharacterResponse[]> => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9');
  return data;
};
