import { CardWrapper, NavWrapper } from '../../shared';
import { LinkBackToHome } from '../../components';
import { Card, Button } from 'react-bootstrap';

export function Episodes() {
  return (
    <>
      <NavWrapper>
        <LinkBackToHome />
      </NavWrapper>
      <CardWrapper>
        <Card.Title>Card Name</Card.Title>
        <Card.Text>Data de estreia:</Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </CardWrapper>
    </>
  );
}
