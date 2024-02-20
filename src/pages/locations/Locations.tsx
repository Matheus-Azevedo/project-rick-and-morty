import { CardWrapper, NavWrapper } from '../../shared';
import { LinkBackToHome } from '../../components';
import { Card, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { LocationResponse, getLocations } from '../../services';

export function Locations() {
  const [locations, setLocations] = useState<LocationResponse[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getLocations();
      setLocations(data);
    }
    fetchData();
  }, []);
  return (
    <>
      <NavWrapper>
        <LinkBackToHome />
      </NavWrapper>
      {locations.map((location) => (
        <CardWrapper>
          <Card.Title>{location.name}</Card.Title>
          <Card.Text>Type: {location.type}</Card.Text>
          <Card.Text>Dimension: {location.dimension}</Card.Text>
          <Button variant='primary'>Go somewhere</Button>
        </CardWrapper>
      ))}
    </>
  );
}
