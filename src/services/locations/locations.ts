import axios from 'axios';

export interface LocationResponse {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export const getLocations = async (): Promise<LocationResponse[]> => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/location/1,2,3');
  return data;
};
