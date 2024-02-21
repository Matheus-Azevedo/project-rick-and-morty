import { CardWrapper, NavWrapper } from '../../shared';
import { LinkBackToHome } from '../../components';
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { CharacterResponse, getCharacters } from '../../services';
import styles from '../Pages.module.css';

export function Characters() {
  const [characters, setCharacters] = useState<CharacterResponse[]>([]);
  const [currentNumber, setCurrentNumber] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await getCharacters(currentNumber);
      setCharacters(data);
    }
    fetchData();
  }, [currentNumber]);

  const handleNext = () => {
    if (currentNumber < 42) {
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
        {characters.map((character) => (
          <CardWrapper>
            <Card.Img variant='top' src={character.image} />
            <Card.Title>{character.name}</Card.Title>
            <Card.Text>Status: {character.status}</Card.Text>
            <Card.Text>Species: {character.species}</Card.Text>
            <Card.Text>Location: {character.location.name}</Card.Text>
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
