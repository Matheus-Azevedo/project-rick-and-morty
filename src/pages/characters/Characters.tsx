import { CardWrapper, NavWrapper } from '../../shared';
import { LinkBackToHome } from '../../components';
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { CharacterResponse, getCharacters } from '../../services';
import styles from '../Pages.module.css';

export function Characters() {
  const [characters, setCharacters] = useState<CharacterResponse[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCharacters();
      setCharacters(data);
    }
    fetchData();
  }, []);

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
    </>
  );
}
