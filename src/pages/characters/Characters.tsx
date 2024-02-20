import { CardWrapper, NavWrapper } from '../../shared';
import { LinkBackToHome } from '../../components';
import { Card, Button } from 'react-bootstrap';

export function Characters() {
  return (
    <>
      <NavWrapper>
        <LinkBackToHome />
      </NavWrapper>
      <CardWrapper>
        <Card.Img variant='top' src='holder.js/100px180' />
        <Card.Title>Card Name</Card.Title>
        <Card.Text>Status:</Card.Text>
        <Card.Text>Species:</Card.Text>
        <Card.Text>Location:</Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </CardWrapper>
    </>
  );
}
