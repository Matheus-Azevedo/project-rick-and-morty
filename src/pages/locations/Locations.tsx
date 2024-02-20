import { CardWrapper, NavWrapper } from '../../shared';
import { LinkBackToHome } from '../../components';
import { Card, Button } from 'react-bootstrap';

export function Locations() {
  return (
    <>
      <NavWrapper>
        <LinkBackToHome />
      </NavWrapper>
      <CardWrapper>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Title>Card Name</Card.Title>
        <Card.Text>Tipo:</Card.Text>
        <Card.Text>Dimensão:</Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </CardWrapper>
    </>
  );
}
