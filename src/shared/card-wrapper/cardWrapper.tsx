import { Card } from 'react-bootstrap';

export function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}
