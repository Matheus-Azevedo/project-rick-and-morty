import { CardWrapper, NavWrapper } from '../../shared';
import { LinkBackToHome } from '../../components';
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { LocationResponse, getLocations } from '../../services';
import styles from '../Pages.module.css';

export function Locations() {
  const [locations, setLocations] = useState<LocationResponse[]>([]);
  const [currentNumber, setCurrentNumber] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const data = await getLocations(currentNumber);
      setLocations(data);
    }
    fetchData();
  }, [currentNumber]);

  const handleNext = () => {
    if (currentNumber < 7) {
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
        {locations.map((location) => (
          <CardWrapper>
            <Card.Title>{location.name}</Card.Title>
            <Card.Text>Type: {location.type}</Card.Text>
            <Card.Text>Dimension: {location.dimension}</Card.Text>
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
