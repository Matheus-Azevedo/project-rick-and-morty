import { CardWrapper, NavWrapper } from '../../shared';
import { LinkBackToHome } from '../../components';
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { EpisodeResponse, getEpisodes } from '../../services';
import styles from '../Pages.module.css';

export function Episodes() {
  const [episodes, setEpisodes] = useState<EpisodeResponse[]>([]);
  const [currentNumber, setCurrentNumber] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await getEpisodes(currentNumber);
      setEpisodes(data);
    }
    fetchData();
  }, [currentNumber]);

  const handleNext = () => {
    if (currentNumber < 3) {
      setCurrentNumber(currentNumber + 1);
      console.log(currentNumber + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentNumber > 1) {
      setCurrentNumber(currentNumber - 1);
      console.log(currentNumber - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <NavWrapper>
        <LinkBackToHome />
      </NavWrapper>
      <div className={styles.container_cards}>
        {episodes.map((episode) => (
          <CardWrapper>
            <Card.Title>{episode.name}</Card.Title>
            <Card.Text>Data de Estreia: {episode.air_date}</Card.Text>
            <Card.Text>Episodio: {episode.episode}</Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </CardWrapper>
        ))}
      </div>
      <div className={styles.container_buttons_prev_next}>
        <Button onClick={handlePrevious}>Previous</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </>
  );
}
