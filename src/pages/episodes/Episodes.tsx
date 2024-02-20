import { CardWrapper, NavWrapper } from '../../shared';
import { LinkBackToHome } from '../../components';
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { EpisodeResponse, getEpisodes } from '../../services';

export function Episodes() {
  const [episodes, setEpisodes] = useState<EpisodeResponse[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getEpisodes();
      setEpisodes(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <NavWrapper>
        <LinkBackToHome />
      </NavWrapper>
      {episodes.map((episode) => (
        <CardWrapper>
          <Card.Title>{episode.name}</Card.Title>
          <Card.Text>Data de Estreia: {episode.air_date}</Card.Text>
          <Card.Text>Episodio: {episode.episode}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </CardWrapper>
      ))}
    </>
  );
}
